import { useShow } from "../../src/components/hooks/use-show";
import Carousel from "../components/carousel";
import ShowCard from "../components/show-card";
import { GridLayout } from "../components/styles/grid.style";
import { CarouselHeader } from "../components/styles/carousel.style";
import { HomepageShowsContainer } from "../components/styles/homepage-shows-style";

function Movies() {
  const { popularMovies, upcomingMovies } = useShow();
  return (
    <HomepageShowsContainer>
      <Carousel
        title={'Upcoming Movies'}
        data={upcomingMovies.map((show) => {
          return <ShowCard show={show} />;
        })}

      />
      <CarouselHeader>All Movies</CarouselHeader>
      <GridLayout>

        {popularMovies.map((show) => {
          return <ShowCard show={show} />;
        })}
      </GridLayout>
    </HomepageShowsContainer>
  )
}

export default Movies;
