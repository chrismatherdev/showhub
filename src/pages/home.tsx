import React from 'react';
import Hero from '../components/hero/hero';
import HomepageShow from '../components/homepage-shows/homepage-shows';
import SearchResults from '../components/search/search-results';
import { useShowSearch } from '../hooks/use-show-search';

function Home() {
  const { searchResults } = useShowSearch();

  return (
    <>
      {!searchResults ? (
        <SearchResults />
      ) : (
        <>
          <Hero />
          <HomepageShow />
        </>
      )}
    </>
  );
}

export default Home;
