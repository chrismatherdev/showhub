import Carousel from './carousel';
import { useShow } from './hooks/use-show';
import { HomepageShowsContainer } from './styles/homepage-shows-style';
import ShowCard from './show-card';
import '../index.css';

function HomepageShow() {
  const { popularMovies, topRatedMovies, popularTvShows, topRatedTvShows } = useShow();

  return (
    <HomepageShowsContainer>
      <Carousel
        title={'Popular Movies'}
        data={popularMovies.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
      <Carousel
        title={'Top Rated Movies'}
        data={topRatedMovies.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
      <Carousel
        title={'Popular TV Series'}
        data={popularTvShows.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
      <Carousel
        title={'Top Rated TV Series'}
        data={topRatedTvShows.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
    </HomepageShowsContainer>
  );
}

export default HomepageShow;
