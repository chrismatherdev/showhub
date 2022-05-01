import { useShow } from "../../src/components/hooks/use-show";
import Carousel from "../components/carousel";
import ShowCard from "../components/show-card";
import { GridLayout } from "../components/styles/grid.style";
import { CarouselHeader } from "../../src/components/styles/carousel.style";
import { HomepageShowsContainer } from "../components/styles/homepage-shows-style";

function TvSeries() {
  const { popularTvShows, upcomingTv } = useShow();
  return (
    <HomepageShowsContainer>
      <Carousel
        title={'Upcoming TV Series'}
        data={upcomingTv.map((show) => {
          return <ShowCard show={show} />;
        })}
      />
      <CarouselHeader>All Movies</CarouselHeader>
      <GridLayout>

        {popularTvShows.map((show) => {
          return <ShowCard show={show} />;
        })}
      </GridLayout>
    </HomepageShowsContainer>
  )
}

export default TvSeries;