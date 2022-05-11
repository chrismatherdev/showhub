import React from 'react';
import { IMAGE_PATH } from '../../api/config';
import {
  ShowCardContainer,
  ShowCardTitle,
  Card,
  CardCover,
  ShowCardRating,
  CardInfo,
} from './show-card-style';
import { Shows } from '../../hooks/use-show';

function ShowCard({ show }) {
  return (
    <ShowCardContainer>
      <Card>
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
