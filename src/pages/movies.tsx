import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { CarouselHeader } from '../components/carousel/carousel.style';
import { Styled as S } from './pages.style';

function Movies() {
  const { shows } = useShow();
  return (
    <>
      <S.Hero>
        <S.Header>Explore Movies...</S.Header>
      </S.Hero>
      <S.PagesContainer>
        <Carousel
          title={'In Theatres Now'}
          data={shows[4]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <CarouselHeader>All Movies</CarouselHeader>
        <S.GridLayout>
          {shows[0]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </S.GridLayout>
      </S.PagesContainer>
    </>
  );
}

export default Movies;
