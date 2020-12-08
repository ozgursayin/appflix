import React, { useState, useEffect, useRef } from "react";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import MovieSearch from "../components/MovieSearch";
import WatchList from "../components/Watchlist";
import Favorites from "../components/Favorites";
import movies from "../movies";

const MovieList = (props) => {
  const { page } = props;
  const [result, setResult] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState(
    localStorage.getItem("query") || ["back-to"]
  );
  const previousQuery = useRef("");
  const BASE_URL = "https://api.themoviedb.org/3/search/multi";
  const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const query = `&query=${searchedMovie}`;

  const fetchMovies = async () => {
    const apiCallURL = `${BASE_URL}${api_key}${query}`;
    const result = await fetch(apiCallURL);
    const resultMovies = await result.json();
    setResult(resultMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (previousQuery.current !== "")
      localStorage.setItem("query", previousQuery.current);
  });

  useEffect(() => {
    fetchMovies();
  }, [searchedMovie]);

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

  const movieNameSetter = (e) => {
    previousQuery.current = e.target.value;
    e.target.value.length > 0
      ? setSearchedMovie(e.target.value)
      : setSearchedMovie(localStorage.getItem("query"));
  };

  return (
    <div>
      <Navbar />
      <SearchBox page={page} movieNameSetter={(e) => movieNameSetter(e)} />
      {pageCases(page)}
    </div>
  );
};

export default MovieList;
