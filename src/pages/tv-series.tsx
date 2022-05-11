import React from 'react';
import { useShow } from '../hooks/use-show';
import Carousel from '../components/carousel/carousel';
import ShowCard from '../components/show-card/show-card';
import { GridLayout } from './grid.style';
import { CarouselHeader } from '../components/carousel/carousel.style';
import { HomepageShowsContainer } from '../components/homepage-shows/homepage-shows-style';

function TvSeries() {
  const { popularTvShows, upcomingTv } = useShow();
  return (
    <HomepageShowsContainer>
      <Carousel
        title={'On TV Now'}
        data={upcomingTv.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
      <CarouselHeader>All TV Series</CarouselHeader>
      <GridLayout>
        {popularTvShows.map((show) => {
          return <ShowCard show={show} />;
        })}
      </GridLayout>
    </HomepageShowsContainer>
  );
}

export default TvSeries;
