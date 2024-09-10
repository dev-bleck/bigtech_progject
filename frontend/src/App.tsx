import React, { useState } from 'react';
import styled from 'styled-components';
import WeatherInfo from './components/WeatherInfo';
import MovieRecommendations from './components/MovieRecommendations';
import FoodRecommendations from './components/FoodRecommendations';
import StyledButton from './components/Button';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <WeatherInfo onBackgroundColorChange={setBackgroundColor} />
      <MovieRecommendations key={`movie-${refreshKey}`} />
      <FoodRecommendations key={`food-${refreshKey}`} />
      <StyledButton primary backgroundColor={backgroundColor} onClick={handleRefresh}>
        다른 추천 받기
      </StyledButton>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export default App;
