import React from "react";
import styles from "./MoviesCard.module.css";
const MoviesCard = ({ movies }) => {
  return (
    <div className="d-flex justify-content-center  flex-wrap p-5">
      {movies.map((movie) => (
        <div className="m-2 position-relative">
          <h4 className="h-100 align-items-end text-white d-flex justify-content-center  position-absolute">
            {movie.title}
          </h4>
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
