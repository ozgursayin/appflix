import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { firestoreDB } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Favorites = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { currentUser } = useAuth();

  const getFavoriteMovies = () => {
    const favoriteMoviesFirestoreRef = firestoreDB.collection("Favorites");
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ dbid: doc.id }, ...[doc.data()]);
      });
      setFavoriteMovies(items);
    });
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  const filteredFavoriteMovies =
    favoriteMovies &&
    Object.values(favoriteMovies).filter(
      (favoriteMovie) => favoriteMovie.uid === currentUser.uid
    );

  return (
    <div>
      {filteredFavoriteMovies &&
        filteredFavoriteMovies.map((movie) => (
          <MovieCard
            title={movie.original_title || movie.name}
            description={movie.overview}
            poster_path={movie.poster_path}
            key={movie.id}
            movie={movie}
            media_type={movie.media_type}
            id={movie.id}
          />
        ))}
    </div>
  );
};

export default Favorites;
