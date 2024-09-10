import React from 'react';
import Recommendation from './Recommendation';
import { getRandomMovieRecommendations } from '../data/mockData';
import MovieIcon from '../assets/images/Movie.png';

const MovieRecommendations: React.FC = () => (
  <Recommendation
    title="오늘의 영화 추천"
    icon={MovieIcon}
    getRecommendations={getRandomMovieRecommendations}
    showPlayButton={true}
  />
);

export default MovieRecommendations;
