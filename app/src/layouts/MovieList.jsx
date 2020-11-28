import React from "react";

import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import MovieSearch from "../components/MovieSearch";
import WatchList from "../components/Watchlist";
import Favorites from "../components/Favorites";
import movies from "../movies";

const MovieList = (props) => {
  const { page } = props;
  console.log("Movie", movies);

  const pageCases = (page) => {
    switch (page) {
      case "search":
        return <MovieSearch movies={movies} />;

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
