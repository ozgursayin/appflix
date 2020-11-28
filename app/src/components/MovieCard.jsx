import React from "react";
import styles from "../ui/main.module.css";

const MovieCard = (props) => {
  const { title, description, poster_path } = props;
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentOverlay}></div>
            <img
              className={styles.contentImage}
              src={`${imageBaseURL}${poster_path}`}
              alt=""
            />
            <div className={`${styles.contentDetails} ${styles.fadeInTop}`}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div
                className={`${styles.toolTip} ${styles.likeButton}`}
                onClick={() => console.log("Liked")}
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
