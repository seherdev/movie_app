import { use, useEffect, useState } from 'react';
import React from 'react';
import Search from './components/search';
import './index.css';
import 
import { buildErrorMessage } from 'vite'; //never read diyo

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_SOMEWHERE_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept:  'application/json',
    Authorization: `Bearer ${API_KEY}`, //this verifies who is trying tıo request 
  }
}

const App = () => {
  const initialState = '';
  const [searchTerm, setSearchTerm] = useState([]);

  const [ErrorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]); //videoda  (initialState:[])
  
  const fetchMovies = async (searchTerm) => {
  try {
    const endpoint = `&{API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS); //fetch is a built in javascript function to make api calls

    if(!response.ok){
      throw new Error('Error to fetch movies');
    }

    const data = await response.json();
    
    if(data.Response === 'False'){
      setErrorMessage(value.data.Error || 'Failed to fetch movies');
      setMovieList([]);
      return;
    }
    setMovieList(value.data.results || [] );


  } catch(error){
    console.error('Error fetching movies: ${error}');
    setErrorMessage('Error fetching movies. Please try again.');

  }
}


  useEffect(effect: () => {
    fetchMovies();

  }, deps:[]);


  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./icon-main"></img>
          Find <span className="text-gradient">Movies</span> you will enjoy without the hassle.
      </header>
      
      <section className="all-movies">
        <h2>All Movies</h2>
        {errorMessage && <pc className="text-red-500">{errorMessage}</pc>}

      </section>
        
     
      </div>
    </main>


  )

}
export default App;
