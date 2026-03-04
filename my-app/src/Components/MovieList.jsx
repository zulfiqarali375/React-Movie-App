import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-400 text-xl">No movies found 🎬</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen px-6 py-10">
      <div
        className="max-w-7xl mx-auto grid gap-8 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
