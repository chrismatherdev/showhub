import React from 'react';
import {
  ShowCardContainer,
  ShowCardTitle,
  Card,
  CardCover,
  ShowCardRating,
  CardInfo,
} from './show-card-style';
import { ShowType } from '../../hooks/use-show';

function ShowCard({ show }: ShowType, { size }) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  return (
    <ShowCardContainer>
      <Card size={size}>
        {show.poster_path ? (
          <CardCover src={`${IMAGE_PATH}${show.poster_path}`} alt="Movie Poster" />
        ) : null}
        <CardInfo>
          <ShowCardTitle>{show.original_title || show.original_name}</ShowCardTitle>
          <ShowCardRating>{show.vote_average}</ShowCardRating>
        </CardInfo>
      </Card>
    </ShowCardContainer>
  );
}

export default ShowCard;
