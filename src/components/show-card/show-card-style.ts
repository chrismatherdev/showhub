import styled from 'styled-components';

export const ShowCardContainer = styled.div`
  width: 100%;
  margin-right: 8px;
`;

export const Card = styled.div`
  width: 100%;
  background-color: #2d3748;
  vertical-align: bottom;
  min-height: 50vh;
`;

export const CardCover = styled.img`
  min-width: 12.5rem;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;

export const ShowCardTitle = styled.p`
  color: white;
  font-weight: bold;
`;

export const ShowCardRating = styled.h3`
  color: #ecc94b;
  font-weight: bold;
  background-color: #1a202c;
  padding: 0.25rem 0.5rem;
  border-radius: 10rem;
`;
