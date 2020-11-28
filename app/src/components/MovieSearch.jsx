import React from "react";
import MovieCard from "./MovieCard";

const MovieSearch = (props) => {
  const { movies } = props;
  console.log("MovieSearch", movies.total_results);
  return movies.total_results > 0 ? (
    <div>
      {movies.results.map(
        (movie) =>
          movie.poster_path && (
            <MovieCard
              title={movie.original_title}
              description={movie.overview}
              poster_path={movie.poster_path}
              key={movie.id}
            />
          )
      )}
    </div>
  ) : null;
};

export default MovieSearch;
