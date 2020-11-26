import React from "react";
import MovieCard from "./MovieCard";

const MovieCards = () => {
  //   let MovieList = [];
  //   for (let i = 0; i < 9; i++) {
  //     MovieList.push(<MovieCard />);
  //   }

  const movieListGenerator = () => {
    let MovieList = [];
    for (let i = 0; i < 9; i++) {
      MovieList.push(<MovieCard key={i} />);
    }
    return MovieList;
  };

  return <div>{movieListGenerator()}</div>;
};

export default MovieCards;
