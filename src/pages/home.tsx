import React from 'react';
import Hero from '../components/hero/hero';
import HomepageShow from '../components/homepage-shows/homepage-shows';
import SearchResults from '../components/search/search-results';

function Home() {
  return (
    <>
      <Hero />
      <HomepageShow />
      <SearchResults />
    </>
  );
}

export default Home;
