import { RecommendationItemDTO } from '../types';

export const mockFoodRecommendations = [
  {
    id: 1,
    name: "냉면",
    imageUrl: "https://i.namu.wiki/i/uF4rr0_zwOQ8J0Fg_XZ4WhmdWj3BZ6Jv5wZSOjaQ16GfqXutMn_c9QBMRBZMSd2Xa8KLBfSqd1t-qUOQqD0TLNheeFvFTjgpdfVKtUMG39Bl34hI-Vv2Stjkfd7qJcqaYTx-tYH0obKC9zbY2y_gkA.webp",
    weather: "sunny",
},
{
    id: 2,
    name: "콩국수",
    imageUrl: "https://i.namu.wiki/i/QsuKwSVxVykd52Gz02AXm4z9NXVuNuNW3llfGrzviZWwOvIq6nsE5_mULjupcdyjS60n7KoYn2Cb-G3mCojliR1OE4nPuP2gzcX6n1RcObKEhQNUxZSQ99OOXrTFiUqXI1RaSlqMYNPZew0NQTtphw.webp",
    weather: "sunny",
},
{
    id: 3,
    name: "삼계탕",
    imageUrl: "https://i.namu.wiki/i/zS2dBEMhbPNZ6xn0as-S4cpwnoZx_9Ua2e2eoqBx5VwpbocV22y6THGUEz0glii3O-rm3ExtIkUP-K80Z3sBK5t_iWs6bmjJ8-RECn7fzxEnesKOCOWrTh34EemO3AgDw37AbrkMNDNRrPb6cyVd2A.webp",
    weather: "sunny",
},
{
    id: 4,
    name: "팥빙수",
    imageUrl: "https://i.namu.wiki/i/2rQZXh3nbhHwZ992OXCU1WPBHvX7rZfvMXWtfwhnYbtbD6dLwcQnn2tqryxPKft-bDo4M9pjhdU9YdtVFk0iWgjSS_3DBvZ6p1cOd1A_yqpUULJFEYa-TOt_aWhLA9rUR9lWMeqaP2FjVmijujU20g.webp",
    weather: "sunny",
},
{
    id: 5,
    name: "오이냉국",
    imageUrl: "https://i.namu.wiki/i/JKwOT3_7m-PXxecO_-3Gw6GRW_Yl-PbLENtkStp4awObga817UODkNDAcXF9YSWhuuF8BDbkSSAwz0XEYxy8QGQoSWLMfVnp_Lo-5YgQB-OWo1UWINkH4hU11JYlIdIua_mdLwH2ho-kkPRbfMTUHw.webp",
    weather: "sunny",
},
{
    id: 6,
    name: "화채",
    imageUrl: "https://i.namu.wiki/i/k0B1prLZoJBTsO7yTGvcBrFYISGZGwQkW2ZBWciTshYkf47o3h4E39qqU0ET-6OUQxl8kJGwhWCFhaeXQXA8qS6izTMv1iu9jlcT9L0mmo_47xG6bAMFrmbbCVG_3UZg4aOL9myI8KZL7rwW6Huxvw.webp",
    weather: "sunny",
},
// 새로운 여름 음식 추가
  {
    id: 22,
    name: "냉모밀",
    imageUrl: "https://i.namu.wiki/i/sLNsCQfK-2W9GEOVvqHy7MBie0I83USk4q_YgJrrNDcbFNc6zTFiRRg8AhAngBA9nhCILscB511CokGPeoOIRi862qWw6ODJpFsbvgoTSSI8iLXvqvHRayR9biugbO3hAbRaxwWP-WrAod6m9MteaQ.webp",
    weather: "sunny",
  },
  {
    id: 23,
    name: "초계국수",
    imageUrl: "https://i.namu.wiki/i/oTBbJVhXWyBjUTJo6d4Ft9FO0i0WILVenZDywn64OjAtN9GgnfQ-0bh9pGzwVd5HRnzpQRYgH0wTvff44LspBOqXrfurQ5xgGVLqQpEeQKEFd6ynfQ1JMLR0kVSgFmL-LqlOYit1BW6-aXv550H8rA.webp",
    weather: "sunny",
  },
];

export const mockMovieRecommendations = [
  {
    id: 1,
    name: "리틀 포레스트",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/adoiOpcuBUKeEqfzLqY47VBZN86.jpg",
    description: "서울에서 임용고시를 준비하던 혜원은 어느 겨울, 문득 짐을 챙겨 고향 미성리로 향한다. 집에 도착한 그녀가 가장 먼저 한 일은 꽝꽝 언 땅에 묻힌 배추를 꺼내 얼큰한 배춧국을 끓여먹는 것. 그날부터 혜원의 자급자족 농촌 라이프가 시작된다. 잠깐 쉬다가 금방 올라갈 거라고 믿었지만, 계절은 겨울로 시작해 봄, 여름, 가을을 거쳐 다시 겨울로 순환한다. 평생 마을을 떠나본 적 없는 그녀의 친구 은숙, 대기업에 다니다 귀촌해 농사꾼이 된 또 다른 친구 재하가 혜원과 함께다. 혜원은 친구들과 시간을 보내거나 직접 가꾼 작물로 요리를 해먹으며 지친 몸과 마음을 치유한다.",
    rating: 7.7,
    weather: "sunny",
},
{
    id: 2,
    name: "콜 미 바이 유어 네임",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/guzNdgRjANTBDkTRYGqgzFOgSWx.jpg",
    description: "17살 소년 엘리오의 가족은 매년 여름 손님을 받는다. 엘리오의 아버지 펄먼 교수의 일을 돕는 보조 연구원은 6주 동안 이곳에 머물며 사람들과 어울리고 자유로운 식사, 일광욕과 수영을 즐긴다. 올해 집을 찾은 24살 올리버는 모든 사람이 호감을 갖는 사람이다. 하지만 엘리오의 감정은 좀더 특별하다. 처음 보는 순간부터 그를 의식했고, 그 실체가 동성에게 품은 사랑임을 깨달은 후에는 적대감을 갖고 있는 것처럼 군다. 하지만 엘리오가 자신의 진짜 속내를 내비친 후 두 사람은 서로의 마음이 같다는 것을 알게 된다.",
    rating: 8.1,
    weather: "sunny",
},
{
    id: 3,
    name: "라라랜드",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ad9ndytwOckyShSc0A6tx1rZRkW.jpg",
    description: "차들로 빽빽이 들어찬 LA의 고속도로. 거북이 걸음이던 도로가 뚫리기 시작하지만 미아 지금 손에 든 연기 오디션 대본을 놓지 못한다. 세바스찬은 경적을 누르며 미아를 노려보고는 사라진다. 악연의 시작. 이후 미아는 감미로운 피아노 선율에 이끌려 재즈바로 향하는데, 연주자가 바로 세바스찬이다. 미아가 세바스찬에게 인사를 건네려고 다가가던 순간은 하필 그가 재즈바의 레퍼토리를 무시하고 연주한 탓에 해고된 직후. 세바스찬은 인사를 건네려 다가온 미아를 쌩하니 스쳐 지나가버린다. 세 번째로 두 사람은 파티에 온 손님과 출장 밴드의 키보드 연주자로 다시 만나는데...",
    rating: 7.9,
    weather: "sunny",
},
{
    id: 4,
    name: "겨울왕국",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nelAGS4rcZm2Qyuy3TSNWgU2mEL.jpg",
    description: "서로가 최고의 친구였던 자매 엘사와 안나. 하지만 언니 엘사에게는 하나뿐인 동생에게조차 말 못할 비밀이 있다. 모든 것을 얼려버리는 신비로운 힘이 바로 그 것. 엘사는 통제할 수 없는 자신의 힘이 두려워 왕국을 떠나 북쪽 산으로 도망치고, 홀로 그곳에서 얼음 궁전을 지어 지내게 된다. 한편 얼어버린 왕국의 저주를 풀기 위해 안나는 언니를 찾아 나서고, 그 과정에서 안나는 까칠한 매력의 얼음장수 크리스토프와 만나 영원히 얼어붙은 왕국을 구해내기 위해 함께 고군분투한다.",
    rating: 7.2,
    weather: "sunny",
},
  {
    id: 7,
    name: "맘마미아!",
    imageUrl: "https://image.tmdb.org/t/p/w500/zdUA4FNHbXPadzVOJiU0Rgn6cHR.jpg",
    description: "그리스의 아름다운 섬을 배경으로 펼쳐지는 뮤지컬 영화. ABBA의 명곡들과 함께 결혼을 앞둔 소피가 자신의 아버지를 찾아가는 과정을 그린 유쾌한 여름 영화.",
    rating: 6.9,
    weather: "sunny",
  },
  {
    id: 8,
    name: "조제, 호랑이 그리고 물고기들",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/cGP1NkjgYdCX0hoclBMeBbPeQUz.jpg",
    description: "더운 여름, 우연히 만난 대학생 츠네오와 휠체어를 탄 소녀 조제의 아름답고 순수한 사랑 이야기. 일본의 여름 풍경과 함께 펼쳐지는 감동적인 로맨스.",
    rating: 7.7,
    weather: "sunny",
  },
  {
    id: 10,
    name: "이터널 선샤인",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    description: "흐린 날씨처럼 우울한 분위기의 로맨스 영화. 기억 삭제 시술을 받은 연인들의 이야기를 통해 사랑의 의미를 되새기게 한다.",
    rating: 8.3,
    weather: "cloudy",
  },
  {
    id: 11,
    name: "블레이드 러너 2049",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    description: "안개 낀 듯한 미래 도시를 배경으로 한 SF 영화. 흐린 날씨와 어우러진 네온 불빛들이 독특한 분위기를 자아낸다.",
    rating: 7.5,
    weather: "cloudy",
  },
  {
    id: 12,
    name: "그래비티",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4pRXqT7wQmoH5sH6Z4WYmbAFG4t.jpg",
    description: "우주의 무중력 상태를 배경으로 한 영화로, 지구의 흐린 날씨와 대비되는 우주의 고요함을 보여준다.",
    rating: 7.2,
    weather: "cloudy",
  },
  {
    id: 13,
    name: "인셉션",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    description: "꿈과 현실의 경계가 모호한 영화로, 흐린 날씨처럼 불분명한 상황 속에서 펼쳐지는 이야기.",
    rating: 8.4,
    weather: "cloudy",
  },
  {
    id: 14,
    name: "그녀",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    description: "흐린 날씨의 도시를 배경으로 한 미래 로맨스 영화. AI와 인간의 관계를 섬세하게 그려낸다.",
    rating: 7.9,
    weather: "cloudy",
  },
  {
    id: 16,
    name: "스노우 피어서",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5dCIBGXnIuPdP1gmlElEDMTcIGT.jpg",
    description: "영구 빙하기가 된 지구를 달리는 기차를 배경으로 한 SF 영화. 눈과 얼음으로 뒤덮인 세상을 보여준다.",
    rating: 6.9,
    weather: "snowy",
  },
  {
    id: 19,
    name: "더 씽",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
    description: "남극의 눈보라 치는 기지를 배경으로 한 공포 영화. 극한의 추위 속에서 펼쳐지는 긴장감 넘치는 이야기.",
    rating: 8.1,
    weather: "snowy",
  },
  {
    id: 21,
    name: "세븐",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    description: "비 내리는 도시를 배경으로 한 스릴러 영화. 우울한 날씨와 어우러진 긴장감 넘치는 범죄 수사극.",
    rating: 8.4,
    weather: "rainy",
  },
  {
    id: 22,
    name: "블레이드 러너",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    description: "끊임없이 비가 내리는 미래 도시를 배경으로 한 SF 영화. 네온사인과 어우러진 빗줄기가 독특한 분위기를 자아낸다.",
    rating: 8.1,
    weather: "rainy",
  },
  {
    id: 24,
    name: "주라기 월드",
    imageUrl: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    description: "열대 우림의 폭우 속에서 펼쳐지는 모험 영화. 공룡들과의 숨막히는 추격전이 빗속에서 펼쳐진다.",
    rating: 6.9,
    weather: "rainy",
  },
];

function getRandomItems<T extends RecommendationItemDTO>(items: T[], count: number, weather: string): T[] {
    const filteredItems = items.filter(item => item.weather === weather);
    return [...filteredItems].sort(() => 0.5 - Math.random()).slice(0, count);
  }
  
export const getRandomFoodRecommendations = () => getRandomItems(mockFoodRecommendations, 3, "sunny");
export const getRandomMovieRecommendations = () => getRandomItems(mockMovieRecommendations, 3, "sunny");
