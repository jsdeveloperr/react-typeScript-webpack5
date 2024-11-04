import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon} from '../../assets/icons/Icons';
import { Movie } from '../../types/types';
import IMDbLogo from '../../assets/IMDb.png';
import { useFavoriteMovies } from '../../context/FavoriteMoviesContext';
import './MovieCard.scss';
import images from '../../utilities/assetsLoader';
import { CONSTANTS } from '../../utilities/constants';

type MovieCardProps = {
 movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoriteMovies();
  const navigate = useNavigate();
  const favoriteStatus = isFavorite(movie.id);
  const imagePath = `${movie.path}`;

  return (
    <div className="movie-card">
      {movie.isTvSeries && <div className="series-badge">{CONSTANTS.MOVIE_CARD.SERIES_BADGE}</div>}
      <button
        type="button"
        className="favorite"
        aria-label="add to favorite"
        onClick={() => toggleFavorite(movie)}
      >
        <HeartIcon fill={favoriteStatus} />
      </button>
      <Link to={`/movie/${movie.id}`}>
        <div className="poster-wrap">
        <img src={images[imagePath]} alt={movie.name} />
        </div>
        <div className="detail">
          <p className="country">
          {CONSTANTS.MOVIE_CARD.COUNTRY},{' '}
            <span>
              {new Date(movie.year).getFullYear()}
            </span>
          </p>
          <p className="title">
            {movie.name}
          </p>
          <p className="ratting">
            <span>
              <img src={IMDbLogo} alt={CONSTANTS.MOVIE_CARD.IMDB_LOGO_ALT} />
              <span>{movie.imdb} {CONSTANTS.MOVIE_CARD.RATING_SUFFIX}</span>
            </span>
          </p>
          <p className="genre">{movie.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
