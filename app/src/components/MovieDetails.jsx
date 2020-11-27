import React from "react";
import styles from "../ui/details.module.css";

const MovieDetails = () => {
  const movieTitle = "My Neighbor Totoro";
  const status = "Released";
  const duration = "1 hour 26 minutes";
  const genres = "Fantasy, Animation, Family";
  const releaseDate = "16 April 1988";
  const releaseYear = "1988";
  const tagLine = "These strange creatures still exist in Japan. Probably.";
  const synopsis = `Two sisters move to the country with their father in order
  to be closer to their hospitalized mother, and discover the
  surrounding trees are inhabited by Totoros, magical spirits
  of the forest. When the youngest runs away from home, the
  older sister seeks help from the spirits to find her.`;
  const companyCredits =
    "Studio Ghibli, Nibariki, Tokuma Japan Communications Co.Ltd.";
  const countries = "Japan";
  const budget = "10.000.000";
  const revenue = "20.000.000";
  const rating = "8/10";
  const runtime = "86 minutes";
  const movieImage = `https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=359e8e12304ffa04a38627a157fc3362`;

  return (
    <div>
      <div id={styles.container}>
        <div id={styles.results}>
          <div id={styles.movie}>
            <div className={styles.movieDetailsContainer}>
              <div className={`${styles.column} ${styles.columnMd}`}>
                <img src={movieImage} id={styles.poster} alt="Movie" />
              </div>
              <div className={`${styles.column} ${styles.columnMd}`}>
                <h1 id={styles.title}>
                  {movieTitle}
                  <span id={styles.date}> ({releaseYear})</span>
                </h1>
                <div className={styles.row}>
                  <span className={styles.badge}>
                    <span id={styles.status}>{status}</span>
                  </span>
                </div>
                <div className={styles.row}>
                  {duration} | {genres} | {releaseDate}
                </div>
                <h3 id={styles.tagline}>{tagLine}</h3>
                <div id={styles.overview}>
                  <p id={styles.synopsis}>{synopsis}</p>
                </div>
                <div className={styles.row}>
                  <h2>Company Credits</h2>
                  <div id={styles.companies}>{companyCredits}</div>
                </div>
                <div className={styles.row}>
                  <h2>Countries</h2>
                  <div id={styles.countries}>{countries}</div>
                </div>
                <div className={styles.row}>
                  <h2>Box Office</h2>
                  <div id={styles.budget}>
                    <strong>Budget:</strong> ${budget}
                  </div>
                  <div id={styles.revenue}>
                    <strong>Revenue:</strong> ${revenue}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.column} ${styles.columnMd}`}>
                    <div className={styles.ratings}>
                      <h2>Rating</h2>
                      <span id={styles.rating}>{rating}</span>
                    </div>
                  </div>
                  <div className={`${styles.column} ${styles.columnMd}`}>
                    <h2>Runtime</h2>
                    <div>
                      <div id={styles.runtime}>{runtime}</div>
                    </div>
                  </div>
                  <div className={`${styles.column} ${styles.columnLg}`}>
                    <h2>Related</h2>
                    <ul id={styles.related}></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
