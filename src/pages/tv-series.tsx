import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { Styled as S } from './pages.style';

function TvSeries() {
  const { shows } = useShow();

  return (
    <>
      <S.Hero>
        <S.Header>Explore TV Series...</S.Header>
      </S.Hero>
      <S.Container>
        <Carousel
          title={'On TV Now'}
          data={shows[5]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <S.Header>All TV Series</S.Header>
        <S.Grid>
          {shows[1]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </S.Grid>
      </S.Container>
    </>
  );
}

export default TvSeries;
