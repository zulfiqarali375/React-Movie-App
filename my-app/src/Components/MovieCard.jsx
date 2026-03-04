import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
                    hover:shadow-red-500/40 hover:scale-105 
                    transition duration-300 cursor-pointer"
    >
      {/* Movie Poster */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                        hover:opacity-100 transition duration-300 
                        flex items-center justify-center"
        >
          <Link
            to={`/movie/${movie.id}`}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold truncate">
          {movie.title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
