import ShowCard from "../show-card";
import { GridLayout } from "../styles/grid.style";
import { useShowSearch } from "../hooks/use-show-search";

function SearchResults() {
  const { searchResults } = useShowSearch();
  return (
    <GridLayout>
      {searchResults.map((show) => {
        return <ShowCard show={show} />;
      })}
    </GridLayout>
  )
}

export default SearchResults;
