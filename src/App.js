import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies('Iron Man'); // Mengambil data awal untuk "Iron Man"
  }, []);

  const fetchMovies = async (query) => {
    const API_KEY = '59d5c7fb'; 
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
    
    try {
      const response = await axios.get(url);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    fetchMovies(query);
  };

  return (
    <div className="App">
      {/* Meneruskan handleSearch ke komponen Header */}
      <Header title="FinProH8" onSearch={handleSearch} />
      <div className="container">
        <h2>Show your favorite movies</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
