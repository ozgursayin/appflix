import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { firestoreDB } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Watchlist = (props) => {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const { currentUser } = useAuth();

  const getWatchListMovies = () => {
    const favoriteMoviesFirestoreRef = firestoreDB.collection("WatchList");
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setWatchListMovies(items);
    });
  };

  useEffect(() => {
    getWatchListMovies();
  }, []);

  const filteredWatchListMovies =
    watchListMovies &&
    Object.values(watchListMovies).filter(
      (watchListMovie) => watchListMovie.uid === currentUser.uid
    );

  return (
    <div>
      {filteredWatchListMovies &&
        filteredWatchListMovies.map((movie) => (
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
