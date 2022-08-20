import styled from 'styled-components';

export const ShowCardContainer = styled.div`
  width: 100%;
  margin-right: 8px;
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  vertical-align: bottom;
  padding: 5px;
  max-height: 50vh;
`;

export const CardCover = styled.img`
  min-width: 12.5rem;
  width: 100%;
  height: 100%;
  pointer-events: none;
  min-height: 300px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  max-height: 60px;
`;

export const ShowCardTitle = styled.p`
  color: black;
  font-weight: bold;
`;

export const ShowCardRating = styled.h3`
  color: black;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border: 1px solid black;
  border-radius: inherit;
`;
