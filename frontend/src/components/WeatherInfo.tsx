import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sunnyIcon from '../assets/images/Sun.png';
import rainyIcon from '../assets/images/Rain.png';
import cloudyIcon from '../assets/images/Cloud.png';
import snowyIcon from '../assets/images/Snow.png';
import axios from 'axios';

interface WeatherContainerProps {
  backgroundColor: string;
}

interface WeatherData {
  weather: string;
  temperature: number;
  location: string;
}

interface WeatherApiResponse {
  city: string;
  forecast_time: string;
  temperature: string;
  weather_condition: string;
}

interface WeatherInfoProps {
  onBackgroundColorChange: (color: string) => void;
}

const weatherInfo: { [key: string]: { message: string; icon: string; backgroundColor: string } } = {
  'cloudy': { message: `오늘은 피크닉을 
    가보는건 어떨까요?`, icon: cloudyIcon, backgroundColor: '#FF7E74' },
  'rainy': { message: `오늘은 꼭
     우산을 챙기세요`, icon: rainyIcon, backgroundColor: '#2E3B5D' },
  'sunny': { message: `너무 더운 오늘 
    건강 유의하세요`, icon: sunnyIcon, backgroundColor: '#FE5143' },
  'snowy': { message: `눈 오는 추운 겨울 
    따뜻한 차 한 잔`, icon: snowyIcon, backgroundColor: '#457BDF' },
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({ onBackgroundColorChange }) => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get<WeatherApiResponse>('http://localhost:3005/weather/seoul');
        console.log(response);
        setWeatherData(response.data);
        
        // 날씨 조건에 따라 배경색 설정
        const backgroundColor = getBackgroundColor(response.data.weather_condition);
        onBackgroundColorChange(backgroundColor);
      } catch (error) {
        console.error('날씨 데이터를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchWeatherData();
  }, [onBackgroundColorChange]);

  if (!weatherData) return <div>날씨 정보를 가져오는 중...</div>;

  const { city, forecast_time, temperature, weather_condition } = weatherData;

  return (
    <WeatherContainer backgroundColor={getBackgroundColor(weather_condition)}>
      <ServiceTitle>Moochelin</ServiceTitle>
      <TextArea>
        <div>
          <MessageText>{getWeatherMessage(weather_condition)}</MessageText>
          <WeatherDetails>{temperature} / {city}</WeatherDetails>
          <WeatherDetails>{forecast_time} 기준</WeatherDetails>
        </div>
        <WeatherIcon src={getWeatherIcon(weather_condition)} alt={weather_condition} />
      </TextArea>
    </WeatherContainer>
  );
};

// 날씨 조건에 따른 배경색 반환 함수
const getBackgroundColor = (condition: string): string => {
  if (condition.includes('맑음')) return '#FE5143';
  if (condition.includes('구름')) return '#FF7E74';
  if (condition.includes('비')) return '#2E3B5D';
  if (condition.includes('눈')) return '#457BDF';
  return '#FF7E74'; // 기본값
};

// 날씨 조건에 따른 메시지 반환 함수
const getWeatherMessage = (condition: string): string => {
  if (condition.includes('맑음')) return '너무 더운 오늘\n건강 유의하세요';
  if (condition.includes('구름')) return '오늘은 피크닉을\n가보는건 어떨까요?';
  if (condition.includes('비')) return '오늘은 꼭\n우산을 챙기세요';
  if (condition.includes('눈')) return '눈 오는 추운 겨울\n따뜻한 차 한 잔';
  return '오늘도 좋은 하루\n되세요!';
};

// 날씨 조건에 따른 아이콘 반환 함수
const getWeatherIcon = (condition: string): string => {
  if (condition.includes('맑음')) return sunnyIcon;
  if (condition.includes('구름')) return cloudyIcon;
  if (condition.includes('비')) return rainyIcon;
  if (condition.includes('눈')) return snowyIcon;
  return cloudyIcon; // 기본값
};

const WeatherContainer = styled.div<WeatherContainerProps>`
  background-color: ${props => props.backgroundColor};
  color: white;
  padding: 5px 20px 10px 20px;
`;

const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherIcon = styled.img`
  float: right;
  width: 180px;
  height: 180px;
`;

const ServiceTitle = styled.h1`
  font-size: 28px;
  margin: 0px;
`;

const MessageText = styled.p`
  white-space: pre-line;
  font-size: 28px;
  letter-spacing: -3px;
  margin: 0px;
`;

const WeatherDetails = styled.p`
  font-size: 22px;
  letter-spacing: -2px;
  margin: 0px;
`;

export default WeatherInfo;

