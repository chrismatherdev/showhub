import { IMAGE_PATH } from '.././api/config';
import { ShowCardContainer, ShowCardTitle } from "./styles/show-card-style";
import '../index.css';

function ShowCard({ show }) {
  return (
    <ShowCardContainer>
      <div className="movie-card">
        {show.poster_path ? (
          <img
            className="movie-cover"
            src={`${IMAGE_PATH}${show.poster_path}`}
            alt="Movie Poster"
          />
        ) : null}
        <ShowCardTitle>{show.original_title || show.original_name}</ShowCardTitle>
      </div>
    </ShowCardContainer>
  );
}

export default ShowCard;
