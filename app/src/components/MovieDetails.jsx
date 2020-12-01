import React, { useState, useEffect } from "react";
import styles from "../ui/details.module.css";
import { useLocation } from "react-router-dom";

const MovieDetails = ({ page }) => {
  const location = useLocation();
  console.log(page);
  const movie = location.state;
  const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  const movieID = movie.id;
  const mediaType = `${movie.media_type}/`;
  console.log(mediaType);
  const append = "&append_to_response=videos";
  const MovieDataBaseURL = `https://api.themoviedb.org/3/`;
  const queryURL = `${MovieDataBaseURL}${mediaType}${movieID}${api_key}${append}`;
  console.log(queryURL);

  const [movieDetails, setMovieDetails] = useState("");

  const fetchMovies = async () => {
    const apiCallURL = queryURL;
    const result = await fetch(apiCallURL);
    const resultMovies = await result.json();
    setMovieDetails(resultMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(movieDetails);

  const imageBaseURL = "https://image.tmdb.org/t/p/original/";
  const posterPath = movieDetails.poster_path;
  const movieImage = `${imageBaseURL}${posterPath}`;
  const movieTitle = movieDetails.original_title || movieDetails.original_name;
  const status = movieDetails.status;
  const runtime = movieDetails.runtime;
  const seasons = movieDetails.number_of_seasons;
  const episodes = movieDetails.number_of_episodes;
  const lifetime = runtime || episodes;
  const isMinute = runtime ? " minutes" : " episodes";
  const duration =
    (runtime &&
      `${Math.floor(runtime / 60)} hour(s) ${runtime % 60} minutes`) ||
    `${seasons} seasons`;

  let genres = "";
  for (let i in movieDetails.genres) {
    ~~i === ~~movieDetails.genres.length - 1
      ? (genres += `${movieDetails.genres[i].name} `)
      : (genres += `${movieDetails.genres[i].name}, `);
  }

  const releaseDate = movieDetails.release_date || movieDetails.first_air_date;
  const releaseYear =
    (movieDetails.release_date && movieDetails.release_date.substring(0, 4)) ||
    (movieDetails.first_air_date &&
      movieDetails.first_air_date.substring(0, 4));

  const tagLine = movieDetails.tagline;
  const synopsis = movieDetails.overview;

  let companyCredits = "";
  for (let i in movieDetails.production_companies) {
    ~~i === ~~movieDetails.production_companies.length - 1
      ? (companyCredits += `${movieDetails.production_companies[i].name} `)
      : (companyCredits += `${movieDetails.production_companies[i].name}, `);
  }

  let countries = "";
  for (let i in movieDetails.production_countries) {
    ~~i === ~~movieDetails.production_countries.length - 1
      ? (countries += `${movieDetails.production_countries[i].name} `)
      : (countries += `${movieDetails.production_countries[i].name}, `);
  }
  const budget = parseInt(movieDetails.budget).toLocaleString();
  const revenue = parseInt(movieDetails.revenue).toLocaleString();
  const rating = `${movieDetails.vote_average}/10`;
  const voteCount = movieDetails.vote_count;
  let netWorks = "";
  for (let i in movieDetails.networks) {
    ~~i === ~~movieDetails.networks.length - 1
      ? (netWorks += `${movieDetails.networks[i].name} `)
      : (netWorks += `${movieDetails.networks[i].name}, `);
  }
  return (
    <div>
      <div id={styles.container}>
        <div id={styles.results}>
          <div id={styles.movie}>
            <div className={styles.movieDetailsContainer}>
              <div
                className={`${styles.column} ${styles.columnMd} ${styles.movieInfo}`}
              >
                <img src={movieImage} id={styles.poster} alt="Movie" />
              </div>
              <div className={`${styles.column} ${styles.columnMd} `}>
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
                  {mediaType === "movie/" ? (
                    <div>
                      <h2>Box Office</h2>

                      <div id={styles.budget}>
                        <strong>Budget:</strong> ${budget}
                      </div>
                      <div id={styles.revenue}>
                        <strong>Revenue:</strong> ${revenue}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2>Networks</h2>
                      <div id={styles.budget}>{netWorks}</div>
                    </div>
                  )}
                </div>
                <div className={styles.row}>
                  <div className={`${styles.column} ${styles.columnMd}`}>
                    <div className={styles.ratings}>
                      <h2>Rating</h2>
                      <span id={styles.rating}>
                        {rating}
                        <span> (</span>
                        {voteCount} Votes
                        <span>)</span>
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.column} ${styles.columnMd}`}>
                    <h2>Runtime</h2>
                    <div>
                      <div id={styles.runtime}>
                        {lifetime}
                        {isMinute}
                      </div>
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
