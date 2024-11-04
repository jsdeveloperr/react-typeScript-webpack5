import { Link } from 'react-router-dom';
import images from '@/utilities/assetsLoader';
import { Movie } from '@/types/types';
import { CONSTANTS } from '@/utilities/constants';
import './SearchCard.scss';

type SearchCardProps = {
  movie: Movie;
}

const SearchCard = ({ movie }: SearchCardProps) => {
  return (
    <Link
      to={`/movie/${movie?.id}`}
      className="search-card"
    >
      <div className="poster-wrap">
      <img src={images[movie.path]} alt={movie.name} />
      </div>
      <div className="detail">
        <p className="country">
        {CONSTANTS.MOVIE_CARD.COUNTRY},{' '}
          <span>
            {new Date(movie.year).getFullYear()}
          </span>
        </p>
        <p className="title">
          {movie?.name}
        </p>

        <p className="genre">{movie.category}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
