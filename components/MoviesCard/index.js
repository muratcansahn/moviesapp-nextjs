import React from "react";
import styles from "./MoviesCard.module.css";
const MoviesCard = ({ movies }) => {
  return (
    <div className={styles.card}>
      {movies.map((movie) => (
        <div className={styles.cardbody}>
          <h3 className={styles.moduletitle}>{movie.title}</h3>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`}
            alt="{movie.title}"
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesCard;
