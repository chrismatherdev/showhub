import React from 'react';
import Carousel from '../carousel/carousel';
import { useShow } from '../../hooks/use-show';
import { HomepageShowsContainer } from './homepage-shows-style';
import ShowCard from '../show-card/show-card';

function HomepageShow() {
  const { shows } = useShow();

  return (
    <>
      <HomepageShowsContainer>
        <Carousel
          title={'Trending Movies'}
          data={shows[0]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />

        <Carousel
          title={'Top Rated Movies'}
          data={shows[2]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <Carousel
          title={'Popular TV Series'}
          data={shows[1]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <Carousel
          title={'Top Rated TV Series'}
          data={shows[3]?.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
      </HomepageShowsContainer>
    </>
  );
}

export default HomepageShow;
