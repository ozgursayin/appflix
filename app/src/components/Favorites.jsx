import React from "react";
import MovieCard from "./MovieCard";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";

const Favorites = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies
        .filter((movie) => movie.isFavorite)
        .map((movie) => (
          <MovieCard
            title={movie.meta.original_title}
            description={movie.meta.overview}
            poster_path={movie.meta.poster_path}
            key={movie.id}
          />
        ))}
    </div>
  );
};

export default Favorites;
