import React, { useState, useMemo } from "react";
import { useMovieContext } from "../../context/MovieContext";
import { useFavoriteMovies } from "../../context/FavoriteMoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import Layout from "../../layouts/Layout/Layout";
import { FilterIcon, SortIcon } from "../../assets/icons/Icons";
import { CONSTANTS } from "../../utilities/constants";
import "./Movies.scss";

const Movies = () => {
  const { movies, error } = useMovieContext();
  const { favorites } = useFavoriteMovies();
  const [filterOption, setFilterOption] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string | null>("Film Adı");

  const handleFilterChange = (option: string | null) => {
    setFilterOption(option);
  };

  const handleSortChange = (option: string | null) => {
    setSortOption(option);
  };

  const filterOptions = useMemo(
    () => [
      { label: CONSTANTS.MOVIES.FILTER_OPTIONS.SHOW_ALL, value: null },
      { label: CONSTANTS.MOVIES.FILTER_OPTIONS.FAVORITES, value: "Favoriler" },
      {
        label: CONSTANTS.MOVIES.FILTER_OPTIONS.NEWLY_ADDED,
        value: "Yeni Eklenenler",
      },
    ],
    []
  );

  const sortOptions = useMemo(
    () => [
      { label: CONSTANTS.MOVIES.SORT_OPTIONS.NAME, value: "Film Adı" },
      { label: CONSTANTS.MOVIES.SORT_OPTIONS.YEAR, value: "Yayın Yılı" },
      { label: CONSTANTS.MOVIES.SORT_OPTIONS.IMDB_SCORE, value: "Imdb Puanı" },
    ],
    []
  );

  const displayedMovies = useMemo(() => {
    let filteredMovies =
      filterOption === CONSTANTS.MOVIES.FILTER_OPTIONS.FAVORITES
        ? movies.filter((movie) => favorites.some((fav) => fav.id === movie.id))
        : filterOption === CONSTANTS.MOVIES.FILTER_OPTIONS.NEWLY_ADDED
        ? [...movies].sort(
            (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime()
          )
        : movies;

    if (sortOption === CONSTANTS.MOVIES.SORT_OPTIONS.NAME) {
      filteredMovies = [...filteredMovies].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOption === CONSTANTS.MOVIES.SORT_OPTIONS.YEAR) {
      filteredMovies = [...filteredMovies].sort(
        (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime()
      );
    } else if (sortOption === CONSTANTS.MOVIES.SORT_OPTIONS.IMDB_SCORE) {
      filteredMovies = [...filteredMovies].sort((a, b) => b.imdb - a.imdb);
    }

    return filteredMovies;
  }, [movies, favorites, filterOption, sortOption]);

  const renderMovies =
    displayedMovies.length > 0 ? (
      displayedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    ) : (
      <p className="noMoviesText">
        {filterOption === CONSTANTS.MOVIES.FILTER_OPTIONS.FAVORITES
          ? CONSTANTS.MOVIES.NO_MOVIES_TEXT.FAVORITES_EMPTY
          : filterOption === CONSTANTS.MOVIES.FILTER_OPTIONS.NEWLY_ADDED
          ? CONSTANTS.MOVIES.NO_MOVIES_TEXT.NEWLY_ADDED_EMPTY
          : CONSTANTS.MOVIES.NO_MOVIES_TEXT.NO_RESULTS}
      </p>
    );

  return (
    <Layout>
      <div className="home-main">
        <section className="movies">
          <div className="sec-head">
            <h1>{CONSTANTS.MOVIES.PAGE_TITLE}</h1>
            <div className="filters">
              <Dropdown
                label={CONSTANTS.MOVIES.SORT_OPTIONS.SORT_NAME}
                options={sortOptions}
                onSelect={handleSortChange}
                icon={<SortIcon />}
              />
              <Dropdown
                label={CONSTANTS.MOVIES.FILTER_OPTIONS.FILTER_NAME}
                options={filterOptions}
                onSelect={handleFilterChange}
                icon={<FilterIcon />}
              />
            </div>
          </div>
          {error ? (
            <p className="errorText">{CONSTANTS.MOVIES.ERROR_MESSAGE}</p>
          ) : (
            <div className="content">{renderMovies}</div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Movies;
