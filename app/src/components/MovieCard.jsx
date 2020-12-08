import React, { useState, useEffect } from "react";
import styles from "../ui/main.module.css";
import { Link } from "react-router-dom";
import {  firestoreDB } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const MovieCard = (props) => {
  const { title, description, poster_path, id, media_type } = props;
  const { currentUser } = useAuth();
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);

  const getFavoriteMovies = () => {
    const favoriteMoviesFirestoreRef = firestoreDB.collection("Favorites");
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setFavoriteMovies(items);
    });
  };

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
    getFavoriteMovies();
    getWatchListMovies();
  }, []);

  const filteredFavoriteMovieIds =
    favoriteMovies &&
    Object.values(favoriteMovies)
      .filter((favoriteMovie) => favoriteMovie.uid === currentUser.uid)
      .map((favoriteMovie) => favoriteMovie.id);

  const filteredWatchListMovieIds =
    watchListMovies &&
    Object.values(watchListMovies)
      .filter((watchListMovie) => watchListMovie.uid === currentUser.uid)
      .map((watchListMovie) => watchListMovie.id);

  const addToFavorites = () => {
    firestoreDB
      .collection("Favorites")
      .doc()
      .set({
        ...props.movie,
        uid: currentUser.uid,
        email: currentUser.email,
      });
  };

  const addToWatchList = () => {
    firestoreDB
      .collection("WatchList")
      .doc()
      .set({
        ...props.movie,
        uid: currentUser.uid,
        email: currentUser.email,
      });
  };

  const removefromFavorites = (id) => {
    const filteredFavoriteMovieKeyID = [];
    const favoriteMoviesFirestoreRef = firestoreDB.collection("Favorites");
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        filteredFavoriteMovieKeyID.push([
          doc.id,
          doc.data().id,
          doc.data().uid,
        ]);
      });
      const movieKeyIdPair = filteredFavoriteMovieKeyID.filter(
        (f) => f[1] === id && f[2] === currentUser.uid
      );
      const keyIdToDelete = movieKeyIdPair[0];
      const keyToDelete = keyIdToDelete[0];
      const favoriteMovieToDelete = firestoreDB
        .collection("Favorites")
        .doc(keyToDelete);
      favoriteMovieToDelete.delete();
    });
  };

  const removefromWatchList = (id) => {
    const filteredWatchListMovieKeyID = [];
    const watchListMoviesFirestoreRef = firestoreDB.collection("WatchList");
    watchListMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        filteredWatchListMovieKeyID.push([
          doc.id,
          doc.data().id,
          doc.data().uid,
        ]);
      });
      const movieKeyIdPair = filteredWatchListMovieKeyID.filter(
        (f) => f[1] === id && f[2] === currentUser.uid
      );
      const keyIdToDelete = movieKeyIdPair[0];
      const keyToDelete = keyIdToDelete[0];
      const watchListMovieToDelete = firestoreDB
        .collection("WatchList")
        .doc(keyToDelete);
      watchListMovieToDelete.delete();
    });
  };

  const toPageInfo = {
    pathname: `/details/${media_type}/${id}`,
    state: { ...props.movie },
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link to={toPageInfo}>
              <div className={styles.contentOverlay}></div>
            </Link>
            <img
              className={styles.contentImage}
              src={`${imageBaseURL}${poster_path}`}
              alt="Poster"
            />

            <div className={`${styles.contentDetails} ${styles.fadeInTop}`}>
              <Link to={toPageInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
              <div
                className={`${styles.toolTip} ${styles.likeButton}`}
                onClick={addToFavorites}
                hidden={
                  filteredFavoriteMovieIds &&
                  filteredFavoriteMovieIds.includes(id)
                }
              >
                ❤<span className={styles.toolTipText}>Add to Favorites</span>
              </div>
              <div
                className={`${styles.toolTip} ${styles.unlikeButton}`}
                onClick={() => removefromFavorites(id)}
                hidden={
                  !filteredFavoriteMovieIds ||
                  !filteredFavoriteMovieIds.includes(id)
                }
              >
                x
                <span className={styles.toolTipText}>
                  Remove from Favorites
                </span>
              </div>

              <div
                className={`${styles.toolTip} ${styles.addButton}`}
                // onClick={addToWatchList}

                onClick={addToWatchList}
                hidden={
                  filteredWatchListMovieIds &&
                  filteredWatchListMovieIds.includes(id)
                }
              >
                +<span className={styles.toolTipText}>Add to Watch List</span>
              </div>
              <div
                className={`${styles.toolTip} ${styles.removeButton}`}
                onClick={() => removefromWatchList(id)}
                hidden={
                  !filteredWatchListMovieIds ||
                  !filteredWatchListMovieIds.includes(id)
                }
              >
                -
                <span className={styles.toolTipText}>
                  Remove from Watch List
                </span>
              </div>
            </div>

            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
