import React from "react";
import styles from "../ui/main.module.css";
import { Link } from "react-router-dom";
import firebase, { firestore } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const MovieCard = (props) => {
  const { title, description, poster_path, id, media_type } = props;
  const { currentUser } = useAuth();
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";

  const toPageInfo = {
    pathname: `/details/${media_type}/${id}`,
    state: { ...props.movie },
  };

  const addToFavorites = () => {
    const favoritesDatabaseRef = firestore.ref(`Favorites`);
    const favoriteMovie = {
      ...props.movie,
      email: currentUser.email,
      isFavorite: true,
    };
    favoritesDatabaseRef.push(favoriteMovie);
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
              >
                ❤<span className={styles.toolTipText}>Add to Favorites</span>
              </div>
              <div
                className={`${styles.toolTip} ${styles.addButton}`}
                onClick={() => console.log("Added")}
              >
                +<span className={styles.toolTipText}>Add to Watch List</span>
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
