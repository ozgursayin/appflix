import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { firestore } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Favorites = (props) => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const favoriteMoviesRef = firestore.ref("Favorites");
    favoriteMoviesRef.on("value", (snapshot) => {
      setMovies(snapshot.val());
    });
  }, []);

  const filteredFavoriteMovies =
    movies &&
    Object.values(movies).filter((movie) => movie.email === currentUser.email);
  console.log(filteredFavoriteMovies);

  return (
    <div>
      {filteredFavoriteMovies &&
        filteredFavoriteMovies.map((movie) => (
          <MovieCard
            title={movie.original_title}
            description={movie.overview}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
    </div>
  );
};

export default Favorites;
