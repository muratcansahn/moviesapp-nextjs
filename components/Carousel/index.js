import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import styles from "./Carousel.module.css";

const index = ({ movies }) => {
  return (
    <div>
      <div className="container w-75 d-flex align-items-center ">
        <Carousel>
          {movies.map((movie) => (
            <Carousel.Item>
              <div>
                {/* <Image
                  src={`https://www.themoviedb.org/t/p/w1280_and_h720_bestv2/${movie.poster_path}`}
                  alt="Picture of the author"
                  width={1280}
                  height={720}
                  objectFit="initial"
                /> */}
                <img
                  src={`https://www.themoviedb.org/t/p/w1280_and_h720_bestv2/${movie.poster_path}`}
                  alt=""
                  width="900"
                  height="500"
                  srcset=""
                />

                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}{" "}
        </Carousel>{" "}
      </div>
    </div>
  );
};

export default index;
