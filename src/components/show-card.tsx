import { IMAGE_PATH } from '.././api/config';
import { ShowCardContainer } from './styles/show-card-styles';
import { Shows } from './hooks/use-show';
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
        <p className="movie-title">{show.original_title || show.original_name}</p>
      </div>
    </ShowCardContainer>
  );
}

export default ShowCard;
