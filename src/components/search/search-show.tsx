import React from 'react';
import { ChangeEvent } from 'react';
import { Input, SearchBox, SearchWrapper } from './search-show.style';
import { useShowSearch } from '../../hooks/use-show-search';
import { useDebouncedCallback } from 'use-debounce';

function SearchShow() {
  const { setSearchTerm } = useShowSearch();

  const debouncedCallback = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log('debounce');
  }, 500);

  return (
    <SearchWrapper>
      <SearchBox>
        <Input placeholder="Search your favourite shows..." onChange={debouncedCallback} />
      </SearchBox>
    </SearchWrapper>
  );
}

export default SearchShow;
