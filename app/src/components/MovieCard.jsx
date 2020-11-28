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
            {/* <a href={`${imageBaseURL}${poster_path}`} target="#"> */}
            <div className={styles.contentOverlay}></div>
            <img
              className={styles.contentImage}
              //src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=359e8e12304ffa04a38627a157fc3362"
              //src="https://source.unsplash.com/random/755x540"
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
