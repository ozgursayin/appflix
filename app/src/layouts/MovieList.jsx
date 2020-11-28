import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import MovieSearch from "../components/MovieSearch";
import WatchList from "../components/Watchlist";
import Favorites from "../components/Favorites";
import movies from "../movies";

const MovieList = (props) => {
  const { page } = props;
  const [result, setResult] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3/search/multi";
  const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const searchedMovie = "back-to";
  const query = `&query=${searchedMovie}`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const apiCallURL = `${BASE_URL}${api_key}${query}`;
    const result = await fetch(apiCallURL);
    const resultMovies = await result.json();
    setResult(resultMovies);
  };
  console.log(result);

  const pageCases = (page) => {
    switch (page) {
      case "search":
        return <MovieSearch movies={result} />;

      case "watchlist":
        return <WatchList movies={movies} />;

      case "favorites": {
        return <Favorites movies={movies} />;
      }
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <SearchBox page={page} />
      {pageCases(page)}
    </div>
  );
};

export default MovieList;
