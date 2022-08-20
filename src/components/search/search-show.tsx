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
      {/* <SearchForm onSubmit={search}> */}
      <SearchBox>
        <Input placeholder="Search your favourite shows..." onChange={debouncedCallback}></Input>
        {/* <SearchButton type="submit">Search</SearchButton> */}
      </SearchBox>
      {/* </SearchForm> */}
    </SearchWrapper>
  );
}

export default SearchShow;
