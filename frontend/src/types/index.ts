export interface RecommendationItemDTO {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
  rating?: number;
  weather: string;
}

export interface RecommendationProps {
  title: string;
  icon: string;
  getRecommendations: () => RecommendationItemDTO[];
  showPlayButton?: boolean;
}
