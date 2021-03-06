import React, { useState, useEffect } from "react";
import styles from "../ui/details.module.css";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state;
  const api_key = process.env.REACT_APP_TMDB_API_KEY;
  const movieID = movie.id;
  const mediaType = movie.media_type;
  const MovieDataBaseURL = `https://api.themoviedb.org/3`;
  const queryURL = `${MovieDataBaseURL}/${mediaType}/${movieID}?api_key=${api_key}`;
  const [movieDetails, setMovieDetails] = useState("");
  
  const fetchMovieDetails = async () => {
    const result = await fetch(queryURL);
    const resultMovies = await result.json();
    setMovieDetails(resultMovies);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const imageBaseURL = "https://image.tmdb.org/t/p/original";
  const posterPath = movieDetails.poster_path;
  const movieImage = `${imageBaseURL}/${posterPath}`;
  const movieTitle = movieDetails.original_title || movieDetails.original_name;
  const status = movieDetails.status;
  const runtime = movieDetails.runtime;
  const seasons = movieDetails.number_of_seasons;
  const episodes = movieDetails.number_of_episodes;
  const lifetime = runtime || episodes;
  const minuteOrEpisode = runtime ? " minutes" : " episodes";
  const duration =
    (runtime &&
      `${Math.floor(runtime / 60)} hour(s) ${runtime % 60} minutes`) ||
    `${seasons} seasons`;

  const genres =
    movieDetails.genres &&
    movieDetails.genres.map((genre) => genre.name).join(", ");

  const releaseDate = movieDetails.release_date || movieDetails.first_air_date;
  const releaseYear =
    (movieDetails.release_date && movieDetails.release_date.substring(0, 4)) ||
    (movieDetails.first_air_date &&
      movieDetails.first_air_date.substring(0, 4));

  const tagLine = movieDetails.tagline;
  const synopsis = movieDetails.overview;
  const budget = parseInt(movieDetails.budget).toLocaleString();
  const revenue = parseInt(movieDetails.revenue).toLocaleString();
  const rating = `${movieDetails.vote_average}/10`;
  const voteCount = movieDetails.vote_count;

  const companyCredits =
    movieDetails.production_companies &&
    movieDetails.production_companies.map((company) => company.name).join(", ");

  const countries =
    movieDetails.production_countries &&
    movieDetails.production_countries.map((country) => country.name).join(", ");

  const networks =
    movieDetails.networks &&
    movieDetails.networks.map((network) => network.name).join(", ");

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
                      <div id={styles.budget}>{networks}</div>
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
                        {minuteOrEpisode}
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
