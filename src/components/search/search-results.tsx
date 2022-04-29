import { useShowSearch } from '.././hooks/use-show-search';
import ShowCard from '../show-card';

function SearchResults() {
  const { searchResults } = useShowSearch();
  return <h1>{searchResults}</h1>;
}

export default SearchResults;
