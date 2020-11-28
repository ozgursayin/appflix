import React from "react";
import MovieCard from "./MovieCard";

const MovieSearch = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => (
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

export default MovieSearch;
