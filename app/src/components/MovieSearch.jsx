import React from "react";
import MovieCard from "./MovieCard";

const MovieSearch = (props) => {
  const { movies } = props;

  return movies.total_results > 0 ? (
    <div>
      {movies.results.map(
        (movie) =>
          movie.poster_path && (
            <MovieCard
              movie={movie}
              title={movie.original_title}
              description={movie.overview}
              poster_path={movie.poster_path}
              media_type={movie.media_type}
              key={movie.id}
              id={movie.id}
            />
          )
      )}
    </div>
  ) : null;
};

export default MovieSearch;
