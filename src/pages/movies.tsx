import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { Styled as S } from './pages.style';

function Movies() {
  const { shows } = useShow();
  return (
    <>
      <S.Hero>
        <S.Header>Explore Movies...</S.Header>
      </S.Hero>
      <S.Container>
        <Carousel
          title={'In Theatres Now'}
          data={shows[4]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <S.Header>All Movies</S.Header>
        <S.Grid>
          {shows[0]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </S.Grid>
      </S.Container>
    </>
  );
}

export default Movies;
