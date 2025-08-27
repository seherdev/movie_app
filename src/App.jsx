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
  const [searchTerm, setSearchTerm] = useState(initialState);

  consts[ErrorMessage, setErrorMessage] = useState('');

  
  const fetchMovies = async (searchTerm) => {
  try {

  } catch(error){
    console.error('Error fetching movies: ${error}');
    setErrorMessage('Error fetching movies. Please try again.');
  }
}


  useEffect(effect: () => {

  }, deps:[]);


  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./icon-main"></img>
          Find <span className="text-gradient">Movies</span> you will enjoy without the hassle.
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>  
      <h1 className="text-white">{searchTerm}
        
      </h1>  
      </div>
    </main>


  )

}
export default App;
