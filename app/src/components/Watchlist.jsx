import React, { useEffect, useState } from "react";
import styles from "../ui/main.module.css";
import MovieCard from "./MovieCard";
import DatabaseRefs from "./DatabaseRefs";

const Watchlist = () => {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const watchListMoviesFirestoreRef = DatabaseRefs()
    .watchListMoviesFirestoreRef;

  const getWatchListMovies = () => {
    watchListMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setWatchListMovies(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getWatchListMovies();
  }, []);

  if (watchListMovies.length <= 0 && !loading) {
    return (
      <div className={styles.emptyPage}>
        <h1>Start adding your Watchlist movies here</h1>
      </div>
    );
  }

  return (
    <div>
      {watchListMovies &&
        watchListMovies.map((movie) => (
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

export default Watchlist;
