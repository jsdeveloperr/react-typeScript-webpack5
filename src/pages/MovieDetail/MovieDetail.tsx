import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '@/api/movies/moviesApi';
import { HeartIcon } from '@/assets/icons/Icons';
import { useFavoriteMovies } from '@/context/FavoriteMoviesContext';
import { CONSTANTS } from '@/utilities/constants';
import { Movie } from '@/types/types';
import Loader from '@/components/Loader/Loader';
import Layout from '@/layouts/Layout/Layout';
import IMDbLogo from '@/assets/IMDb.png';
import images from '@/utilities/assetsLoader';
import './MovieDetail.scss';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleFavorite, isFavorite } = useFavoriteMovies();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await fetchMovieById(Number(id));
        setMovie(movieData);
      } catch (err) {
        setError(CONSTANTS.MOVIE_DETAIL.ERROR_MESSAGE);
      }
    };

    getMovie();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <Loader />;
  }

  const favoriteStatus = isFavorite(movie.id);

  return (
    <Layout>
      <div className="movie-detail-main">
        <div className="movie-header">
          <h1>{movie.name}</h1>
        </div>
        <div className="movie-image">
          {movie.isTvSeries && <div className="series-badge">{CONSTANTS.MOVIE_DETAIL.SERIES_BADGE}</div>}
          <img src={images[movie.path]} alt={movie.name} />
          <button
            type="button"
            className="favorite"
            aria-label="add to favorite"
            onClick={() => toggleFavorite(movie)}
          >
            <HeartIcon fill={favoriteStatus} />
          </button>
        </div>
        <div className="movie-summary">
          <p>{movie.summary}</p>
        </div>
        <div className="divider"></div>
        <div className="movie-details">
          <div className="imdb-rating">
            <img src={IMDbLogo} alt="IMDb logo" />
            <span>{movie.imdb} {CONSTANTS.MOVIE_DETAIL.RATING_SUFFIX}</span>
          </div>
          <p><strong>{CONSTANTS.MOVIE_DETAIL.CATEGORY_LABEL}</strong> {movie.category}</p>
          <p><strong>{CONSTANTS.MOVIE_DETAIL.YEAR_LABEL}</strong> {new Date(movie.year).getFullYear()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
