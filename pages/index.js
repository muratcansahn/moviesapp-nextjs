import { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "../components/MoviesCard";
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
      <MoviesCard movies={movies} />

      <h3>POPÜLER FİLMLER</h3>
    </div>
  );
}
