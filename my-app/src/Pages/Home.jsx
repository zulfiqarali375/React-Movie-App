import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=49ad9500f1030642e9996811bba9c3f8`,
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        // Sahi tarika: Yahan data aane ke baad console log karein
        console.log("Movies fetched:", json.results);
      })
      .catch((error) => {
        // Error handling ke liye
        console.error("Error fetching movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
