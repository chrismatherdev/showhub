import { useShows } from '../components/hooks/use-show-search';

function Homepage() {
  const { shows } = useShows();

  return (
    <div>
      <h1>Homepage</h1>
      {shows.map((show) => (
        <h1>{show.popularity}</h1>
      ))}
    </div>
  );
}

export default Homepage;
