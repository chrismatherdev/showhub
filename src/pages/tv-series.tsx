import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { GridLayout, PagesContainer } from './pages.style';
import { CarouselHeader } from '../components/carousel/carousel.style';

function TvSeries() {
  const { popularTvShows, upcomingTv } = useShow();

  return (
    <PagesContainer>
      <Carousel
        title={'On TV Now'}
        data={upcomingTv.map((show) => {
          return <ShowCard key={show.id} show={show} />;
        })}
      />
      <CarouselHeader>All TV Series</CarouselHeader>
      <GridLayout>
        {popularTvShows.map((show) => {
          return <ShowCard key={show.id} show={show} />;
        })}
      </GridLayout>
    </PagesContainer>
  );
}

export default TvSeries;
