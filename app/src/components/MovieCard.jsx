import React, { useState, useEffect } from "react";
import styles from "../ui/main.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import DatabaseRefs from "./DatabaseRefs";

const MovieCard = (props) => {
  const { title, description, poster_path, id, media_type } = props;
  const { currentUser } = useAuth();
  const imageBaseURL = "https://image.tmdb.org/t/p/original";
  const [filteredFavoriteMovieIds, setFilteredFavoriteMovieIds] = useState([]);
  const [filteredWatchListMovieIds, setFilteredWatchListMovieIds] = useState(
    []
  );
  const watchListMoviesFirestoreRef = DatabaseRefs()
    .watchListMoviesFirestoreRef;
  const favoriteMoviesFirestoreRef = DatabaseRefs().favoriteMoviesFirestoreRef;

  const getFavoriteMovies = () => {
    favoriteMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const favoriteMovieIds = [];
      querySnapshot.forEach((doc) => {
        favoriteMovieIds.push(doc.data().id);
      });
      setFilteredFavoriteMovieIds(favoriteMovieIds);
    });
  };

  const getWatchListMovies = () => {
    watchListMoviesFirestoreRef.onSnapshot((querySnapshot) => {
      const watchListMovieIds = [];
      querySnapshot.forEach((doc) => {
        watchListMovieIds.push(doc.data().id);
      });
      setFilteredWatchListMovieIds(watchListMovieIds);
    });
  };

  useEffect(() => {
    getFavoriteMovies();
    getWatchListMovies();
  }, []);

  const addToFavorites = () => {
    favoriteMoviesFirestoreRef
      .add({
        ...props.movie,
        uid: currentUser.uid,
        email: currentUser.email,
      })
      .then(() => {
        console.log(
          `"${
            props.movie.name || props.movie.title
          }" successfully added to Favorites`
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const addToWatchList = () => {
    watchListMoviesFirestoreRef
      .add({
        ...props.movie,
        uid: currentUser.uid,
        email: currentUser.email,
      })
      .then(() => {
        console.log(
          `"${
            props.movie.name || props.movie.title
          }" successfully added to Watch List`
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const removefromFavorites = (id) => {
    const filteredFavoriteMovieKeyID = [];
    const unsubscribe = favoriteMoviesFirestoreRef.onSnapshot(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().id === id)
            filteredFavoriteMovieKeyID.push([
              doc.id,
              doc.data().name || doc.data().title,
              doc.data().id,
              doc.data().uid,
            ]);
        });

        const keyIdToDelete = filteredFavoriteMovieKeyID[0];
        const keyToDelete = keyIdToDelete[0];
        favoriteMoviesFirestoreRef
          .doc(keyToDelete)
          .delete()
          .then(() => {
            console.log(
              `"${keyIdToDelete[1]}" successfully deleted from Favorites!`
            );
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
        unsubscribe();
      }
    );
  };

  const removefromWatchList = (id) => {
    const filteredWatchListMovieKeyID = [];
    const unsubscribe = watchListMoviesFirestoreRef.onSnapshot(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().id === id)
            filteredWatchListMovieKeyID.push([
              doc.id,
              doc.data().name || doc.data().title,
              doc.data().id,
              doc.data().uid,
            ]);
        });
        const keyIdToDelete = filteredWatchListMovieKeyID[0];
        const keyToDelete = keyIdToDelete[0];

        if (keyToDelete) {
          watchListMoviesFirestoreRef
            .doc(keyToDelete)
            .delete()
            .then(() => {
              console.log(
                `"${keyIdToDelete[1]}" successfully deleted from Watch List!`
              );
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
          unsubscribe();
        }
      }
    );
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
              src={`${imageBaseURL}/${poster_path}`}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
