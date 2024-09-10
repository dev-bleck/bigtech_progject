import React from 'react';
import Recommendation from './Recommendation';
import { getRandomFoodRecommendations } from '../data/mockData';
import MealIcon from '../assets/images/Meal.png';

const FoodRecommendations: React.FC = () => (
  <Recommendation
    title="오늘의 음식 추천"
    icon={MealIcon}
    getRecommendations={getRandomFoodRecommendations}
  />
);

export default FoodRecommendations;
