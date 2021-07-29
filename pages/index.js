import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import MoviesCard from "../components/MoviesCard";
import Carousel from "../components/Carousel";
import TopRated from "../components/TopRated";
import Navbar from "../components/Navbar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=20be784f740b6b638c906dde5b35efae&language=en-US&page=1 "
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        ></link>

        <link href="./css/style.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="row pt-5 ">
        <div className="col-md-9  ">
          <Carousel movies={movies} />
        </div>
        <div className="col-md-3">
          <TopRated />{" "}
        </div>
      </div>
      <MoviesCard movies={movies} />
    </div>
  );
}
