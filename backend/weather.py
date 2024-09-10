import math
from datetime import datetime, timedelta
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 좌표 변환 함수
def convert_coord(lon, lat):
    NX = 149
    NY = 253

    RE = 6371.00877
    GRID = 5.0
    SLAT1 = 30.0
    SLAT2 = 60.0
    OLON = 126.0
    OLAT = 38.0
    XO = 210 / GRID
    YO = 675 / GRID

    DEGRAD = math.pi / 180.0
    re = RE / GRID
    slat1 = SLAT1 * DEGRAD
    slat2 = SLAT2 * DEGRAD
    olon = OLON * DEGRAD
    olat = OLAT * DEGRAD

    sn = math.tan(math.pi * 0.25 + slat2 * 0.5) / math.tan(math.pi * 0.25 + slat1 * 0.5)
    sn = math.log(math.cos(slat1) / math.cos(slat2)) / math.log(sn)
    sf = math.tan(math.pi * 0.25 + slat1 * 0.5)
    sf = math.pow(sf, sn) * math.cos(slat1) / sn
    ro = math.tan(math.pi * 0.25 + olat * 0.5)
    ro = re * sf / math.pow(ro, sn)

    ra = math.tan(math.pi * 0.25 + lat * DEGRAD * 0.5)
    ra = re * sf / math.pow(ra, sn)
    theta = lon * DEGRAD - olon
    if theta > math.pi:
        theta -= 2.0 * math.pi
    if theta < -math.pi:
        theta += 2.0 * math.pi
    theta *= sn

    x = ra * math.sin(theta) + XO
    y = ro - ra * math.cos(theta) + YO

    x = int(x + 1.5)
    y = int(y + 1.5)

    return x, y


async def get_weather(nx, ny):
    now = datetime.now()
    base_date = now.strftime("%Y%m%d")
    base_time = (now - timedelta(minutes=30)).strftime("%H%M")

    url = f"https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"
    params = {
        "serviceKey": "Im1TTc3tH9g+ivme2asubUUGFNxdLPBKWJtPvzX4sM8UkJ7IrtSBi5teCswrD+oyoeHxW8qGH7k3X57vi/Yemw==",
        "pageNo": "1",
        "numOfRows": "1000",
        "dataType": "JSON",
        "base_date": base_date,
        "base_time": base_time,
        "nx": nx,
        "ny": ny
    }

    async with httpx.AsyncClient(verify=False) as client:
        response = await client.get(url, params=params)
    data = response.json()

    items = data['response']['body']['items']['item']
    temp = next(item['fcstValue'] for item in items if item['category'] == 'T1H')
    sky = next(item['fcstValue'] for item in items if item['category'] == 'SKY')
    pty = next(item['fcstValue'] for item in items if item['category'] == 'PTY')

    return temp, sky, pty

@app.get("/weather/{city}")
async def read_weather(city: str):
    city_info = {
        "seoul": {"name": "서울", "lon": 126.9780, "lat": 37.5665},
        "pangyo": {"name": "판교", "lon": 127.1058, "lat": 37.3947}
    }

    if city not in city_info:
        return {"error": "지원하지 않는 도시입니다"}

    city_data = city_info[city]
    lon, lat = city_data["lon"], city_data["lat"]

    nx, ny = convert_coord(lon, lat)
    temp, sky, pty = await get_weather(nx, ny)

    now = datetime.now()
    forecast_time = now.replace(minute=30, second=0, microsecond=0)
    if now.minute < 30:
        forecast_time -= timedelta(hours=1)

    sky_conditions = {
        "1": "맑음",
        "3": "구름많음",
        "4": "흐림"
    }

    pty_conditions = {
        "0": "없음",
        "1": "비",
        "2": "비/눈",
        "3": "눈",
        "5": "빗방울",
        "6": "빗방울눈날림",
        "7": "눈날림"
    }

    weather_description = sky_conditions.get(sky, "알 수 없음")
    if pty != "0":
        weather_description += f", {pty_conditions.get(pty, '알 수 없음')}"

    return {
        "city": city_data["name"],
        "forecast_time": forecast_time.strftime("%p %I시 %M분"),
        "temperature": f"{temp}°C",
        "weather_condition": weather_description
    }

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3005)