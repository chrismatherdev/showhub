import React, { ChangeEvent } from "react";
import { Input } from "./styles/input-style";
import { useShowSearch } from "../components/hooks/use-show-search";

function SearchBar() {
  const { setSearchTerm } = useShowSearch();

  return (
    <div>
      <h1>Search</h1>
      <Input
        placeholder="Search for movies and TV Series..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
