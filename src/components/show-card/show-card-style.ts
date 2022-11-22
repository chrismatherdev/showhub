import styled from 'styled-components';

export const ShowCardContainer = styled.div`
  width: 100%;
  margin-right: 12.5px;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #1a202c;
  vertical-align: bottom;
  padding: 5px;
  max-height: 50vh;
`;

export const CardCover = styled.img`
  min-width: 11rem;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  min-height: 275px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  max-height: 60px;
`;

export const ShowCardTitle = styled.p`
  padding: 0.5rem;
`;

export const ShowCardRating = styled.h3`
  font-weight: bold;
  padding: 0.25rem 0.5rem;
`;
