import React from 'react';
import Carousel from '../carousel/carousel';
import { useShow } from '../../hooks/use-show';
import { HomepageShowsContainer } from './homepage-shows-style';
import ShowCard from '../show-card/show-card';
import { Gradient } from '../hero/hero-style';
import SearchResults from '../search/search-results';
import { useShowSearch } from '../../hooks/use-show-search';

function HomepageShow() {
  const { popularMovies, topRatedMovies, popularTvShows, topRatedTvShows } = useShow();
  const { searchResults } = useShowSearch();

  return (
    <>
      <Gradient />
      <HomepageShowsContainer>
        <Carousel
          title={'Trending Movies'}
          data={popularMovies.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />

        <Carousel
          title={'Top Rated Movies'}
          data={topRatedMovies.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <Carousel
          title={'Popular TV Series'}
          data={popularTvShows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
        <Carousel
          title={'Top Rated TV Series'}
          data={topRatedTvShows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        />
      </HomepageShowsContainer>
    </>
  );
}

export default HomepageShow;
