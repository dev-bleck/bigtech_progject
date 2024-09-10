import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import RecommendationList from './RecommendationList';
import { RecommendationProps, RecommendationItemDTO } from '../types';

const Recommendation: React.FC<RecommendationProps> = ({
  title,
  icon,
  getRecommendations,
  showPlayButton = false
}) => {
  const [items, setItems] = useState<RecommendationItemDTO[]>([]);
  const [selectedItem, setSelectedItem] = useState<RecommendationItemDTO | null>(null);

  useEffect(() => {
    setItems(getRecommendations());
  }, [getRecommendations]);

  const handleItemClick = useCallback((item: RecommendationItemDTO) => {
    setSelectedItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const selectedItemDetails = useMemo(() => {
    if (!selectedItem) return null;
    return (
      <ModalContent>
        <ModalHeader style={{ backgroundImage: `url(${selectedItem.imageUrl})` }}>
          <ModalTitle>{selectedItem.name}</ModalTitle>
        </ModalHeader>
        {showPlayButton && <ModalBody>
          {selectedItem.description && <Description>{selectedItem.description}</Description>}
          {selectedItem.rating && <Rating>⭐ {selectedItem.rating.toFixed(1)}</Rating>}
          <PlayButton>▶ 재생</PlayButton>
        </ModalBody>}
      </ModalContent>
    );
  }, [selectedItem, showPlayButton]);

  return (
    <RecommendationContainer>
      <TitleContainer>
        <IconImage src={icon} alt={`${title} 아이콘`} />
        <Title>{title}</Title>
      </TitleContainer>
      <RecommendationList
        items={items}
        onItemClick={handleItemClick}
      />
      {selectedItem && (
        <Modal onClose={handleCloseModal}>
          {selectedItemDetails}
        </Modal>
      )}
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled.div`
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IconImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  color: white;
`;

const ModalHeader = styled.div`
  height: 300px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  }
`;

const ModalTitle = styled.h2`
  font-size: 32px;
  margin: 0;
  z-index: 1;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PlayButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export default Recommendation;
