import React, { useState, useEffect, useRef } from "react";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import MovieSearch from "../components/MovieSearch";
import WatchList from "../components/Watchlist";
import Favorites from "../components/Favorites";

const MovieList = (props) => {
  const { page } = props;
  const [result, setResult] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState(
    localStorage.getItem("query")
  );
  const previousQuery = useRef("");
  const BASE_URL = "https://api.themoviedb.org/3/search/multi";
  const TRENDING_URL = "https://api.themoviedb.org/3/trending/all/day";
  const api_key = process.env.REACT_APP_TMDB_API_KEY;
  const query = searchedMovie;

  const fetchMovies = async () => {
    let apiCallURL = "";
    previousQuery.current !== ""
      ? (apiCallURL = `${BASE_URL}?api_key=${api_key}&query=${query}`)
      : (apiCallURL = `${TRENDING_URL}?api_key=${api_key}`);
    const apiCallResult = await fetch(apiCallURL);
    const resultMovies = await apiCallResult.json();
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

  const checkPageCases = (page) => {
    switch (page) {
      case "search":
        return <MovieSearch movies={result} />;
      case "watchlist":
        return <WatchList movies={result} />;
      case "favorites":
        return <Favorites movies={result} />;
      default:
        return null;
    }
  };

  const movieNameSetter = (e) => {
    previousQuery.current = e.target.value;
    setSearchedMovie(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <SearchBox page={page} movieNameSetter={movieNameSetter} />
      {checkPageCases(page)}
    </div>
  );
};

export default MovieList;
