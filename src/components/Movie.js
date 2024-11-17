import React from 'react';

const Movie = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <div className="movie-title">{movie.Title}</div>
  </div>
);

export default Movie;
