import React from 'react';
import styled from 'styled-components';
import { RecommendationItemDTO } from '../types';

interface RecommendationListProps {
  items: RecommendationItemDTO[];
  onItemClick: (item: RecommendationItemDTO) => void;
}

const RecommendationList: React.FC<RecommendationListProps> = ({ items, onItemClick }) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <Item key={item.id} onClick={() => onItemClick(item)}>
          <Image src={item.imageUrl} alt={item.name} />
          <Title>{item.name}</Title>
          {item.rating && <Rating>⭐ {item.rating.toFixed(1)}</Rating>}
        </Item>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 30%;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin: 0 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
`;

const Title = styled.div`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  text-align: left;
  margin: 5px 0;
`;

const Rating = styled.div`
  font-weight: bold;
  text-align: left;
`;

export default RecommendationList;