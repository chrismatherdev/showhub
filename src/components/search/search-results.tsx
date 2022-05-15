import React from 'react';
import ShowCard from '../show-card/show-card';
import { ResultsGrid } from './search-results.style';
import { useShowSearch } from '../../hooks/use-show-search';

function SearchResults() {
  const { searchResults } = useShowSearch();

  return (
    <ResultsGrid>
      {searchResults.map((results) => {
        return <ShowCard key={results.id} show={results} />;
      })}
    </ResultsGrid>
  );
}

export default SearchResults;
