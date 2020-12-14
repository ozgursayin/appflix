import React, { useEffect, useState } from "react";
import styles from "../ui/main.module.css";
import MovieCard from "./MovieCard";
import DatabaseRefs from "./DatabaseRefs";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const favoriteMoviesFirestoreRef = DatabaseRefs().favoriteMoviesFirestoreRef;

  const getFavoriteMovies = () => {
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setFavoriteMovies(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  if (favoriteMovies.length <= 0 && !loading) {
    return (
      <div className={styles.emptyPage}>
        <h1>Start adding your Favorite movies here</h1>
      </div>
    );
  }

  return (
    <div>
      {favoriteMovies &&
        favoriteMovies.map((movie) => (
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
