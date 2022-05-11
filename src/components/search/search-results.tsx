import React from 'react';
import ShowCard from '../show-card/show-card';
import { GridLayout } from '../../pages/grid.style';
import { useShowSearch } from '../../hooks/use-show-search';

function SearchResults() {
  const { searchResults } = useShowSearch();

  return (
    <GridLayout>
      {searchResults &&
        searchResults.map((show, index) => {
          return (
            <div key={index}>
              <ShowCard show={show} />;
            </div>
          );
        })}
    </GridLayout>
  );
}

export default SearchResults;
