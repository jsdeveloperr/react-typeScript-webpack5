import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoutIcon, SearchIcon } from "@/assets/icons/Icons";
import { useMovieContext } from "@/context/MovieContext";
import { useFavoriteMovies } from "@/context/FavoriteMoviesContext";
import { CONSTANTS } from "@/utilities/constants";
import Loader from "@/components/Loader/Loader";
import SearchCard from "@/components/SearchCard/SearchCard";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchMovies, searchResult, isSearching, resetMovies } = useMovieContext();
  const { favoriteCount, resetFavorites } = useFavoriteMovies();
  const [search, setSearch] = useState("");
  const [activeScroll, setActiveScroll] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActiveScroll(window.scrollY >= 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
    searchMovies(query);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    resetFavorites();
    resetMovies();
    navigate("/");
  };

  return (
    <header className={activeScroll ? "active" : ""}>
    <Link to="#" aria-label="home"></Link>

    {location.pathname !== `/movie/${location.pathname.split("/")[2]}` && (
      <div className={`search ${active ? "active" : ""}`}>
        <label aria-label="search">
          <input
            type="text"
            value={search}
            placeholder={CONSTANTS.HEADER.SEARCH_PLACEHOLDER}
            onChange={handleSearchChange}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <SearchIcon />
        </label>

        {search.length > 1 && (
          <div className="search-content">
            {isSearching ? (
              <Loader />
            ) : (
              <>
                {searchResult.length > 0 ? (
                  searchResult.map((result) => <SearchCard key={result.id} movie={result} />)
                ) : (
                  <div className="no-result">
                    <p>{CONSTANTS.HEADER.NO_RESULTS}</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    )}

    <div className="menu">
      <Link to="#">
        {CONSTANTS.HEADER.FAVORITES_LABEL} <span>{favoriteCount}</span>
      </Link>
      <button onClick={handleLogout}>
        {CONSTANTS.HEADER.LOGOUT_LABEL} <LogoutIcon />
      </button>
    </div>
  </header>
  );
};

export default React.memo(Header);
