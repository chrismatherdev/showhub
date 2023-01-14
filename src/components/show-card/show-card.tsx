import React from 'react';
import { ShowResultType } from '../../hooks/use-show';
import { Styled as S } from './show-card-style';

type Props = {
  show: ShowResultType;
  size: string;
};

function ShowCard({ show, size }: Props) {
  console.log(show, 'show');
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  return (
    <S.Container>
      <S.ShowCard size={size}>
        {show.poster_path ? (
          <S.ShowCover src={`${IMAGE_PATH}${show.poster_path}`} alt="Movie Poster" />
        ) : null}
        <S.ShowContainer>
          <S.Title>{show.original_title || show.original_name}</S.Title>
          <S.Rating>{show.vote_average}</S.Rating>
        </S.ShowContainer>
      </S.ShowCard>
    </S.Container>
  );
}

export default ShowCard;
