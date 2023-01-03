import styled from 'styled-components';

interface CardProps {
  size: string;
}

export const ShowCardContainer = styled.div`
  width: 100%;
  margin-right: 12.5px;
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  border-radius: 10px;
  background-color: #1a202c;
  vertical-align: bottom;
  padding: 5px;
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

export const Styled = {
  Container: styled.div`
    width: 100%;
    margin-right: 12.5px;
  `,

  ShowCard: styled.div<CardProps>`
    width: 100%;
    border-radius: 10px;
    background-color: #1a202c;
    vertical-align: bottom;
    padding: 5px;
  `,

  ShowCover: styled.img`
    min-width: 11rem;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    min-height: 275px;
  `,

  ShowContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    max-height: 60px;
  `,

  Title: styled.p`
    padding: 0.5rem;
  `,

  Rating: styled.h3`
    font-weight: bold;
    padding: 0.25rem 0.5rem;
  `,
};
