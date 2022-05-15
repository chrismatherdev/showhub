import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { GridLayout, PagesContainer } from './pages.style';
import { CarouselHeader } from '../components/carousel/carousel.style';

function Movies() {
  const { popularMovies, upcomingMovies } = useShow();
  return (
    <PagesContainer>
      <Carousel
        title={'In Theatres Now'}
        data={upcomingMovies.map((show) => {
          return <ShowCard key={show.id} show={show} />;
        })}
      />
      <CarouselHeader>All Movies</CarouselHeader>
      <GridLayout>
        {popularMovies.map((show) => {
          return <ShowCard key={show.id} show={show} />;
        })}
      </GridLayout>
    </PagesContainer>
  );
}

export default Movies;
