import React, { ChangeEvent } from "react";
import { Input } from "./styles/search-show.style";
import { useShowSearch } from "./hooks/use-show-search";
import { useDebouncedCallback } from "use-debounce";

function SearchShow() {
  const { setSearchTerm } = useShowSearch();

  const debouncedCallback = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500
  );

  return (
    <div>
      <h1>Search</h1>
      <Input
        placeholder="Search for movies and TV Series..."
        onChange={debouncedCallback}
      />
    </div>
  );
}

export default SearchShow;
