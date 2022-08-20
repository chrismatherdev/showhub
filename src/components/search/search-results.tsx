import React from 'react';
import ShowCard from '../show-card/show-card';
import { ResultsGrid } from './search-results.style';
import { useShowSearch } from '../../hooks/use-show-search';
import { useShow } from '../../hooks/use-show';

function SearchResults() {
  const { searchResults } = useShowSearch();
  const { shows } = useShow();

  return (
    <>
      <ResultsGrid>
        {searchResults.map((results) => {
          return <ShowCard key={results.id} show={results} />;
        })}
      </ResultsGrid>
    </>
  );
}

export default SearchResults;
