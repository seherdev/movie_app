import { /*use,*/ useEffect, useState } from 'react';
import React from 'react';
import Search from './components/search';
import './index.css';
import { useDebounce } from 'react-use';
//import { databases } from './appwriteConfig';



 
//import { buildErrorMessage } from 'vite'; //never read diyo

const OMDB_API_URL = 'https://www.omdbapi.com/';
const OMDB_API_KEY = import.meta.env.VITE_OMDB_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]); //videoda  (initialState:[])
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');


  //Debounce the search term input to avoid excessive API calls
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);


  const fetchMovies = async (query ='') => {
    setIsLoading(true);
    setErrorMessage('');

  try {
    const endpoint = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}`;

    const response = await fetch(endpoint, API_OPTIONS); //fetch is a built in javascript function to make api calls

    if(!response.ok){
      throw new Error('Error to fetch movies');
    }

    const data = await response.json();
    
    if(data.Response == 'False'){
      setErrorMessage(data.Error || 'Failed to fetch movies');
      setMovieList([]);
      return;
    }
    setMovieList(data.results || [] );
  } catch(error){
    console.error(`Error fetching movies: ${error}`);
    setErrorMessage('Error fetching movies. Please try again.');
  }finally {
    setIsLoading(false);
  }
  }


  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);



/*
  useEffect(() => {
    const fetchMovies = async () => { //??
      try {
        const res = await databases.listDocuments(
          '68af81ab001rb92f33329',
          '68af81ab001b92f33329', 
          
        );
        console.log('appwrite data', res.documents);
      } catch (error) {
        console.error('Error fetching Appwrite data:', error);
      }
    };
    
    fetchMovies(debouncedSearchTerm);

  }, [debouncedSearchTerm]);
*/

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./icon-main"></img>
          Find <span className="text-gradient">Movies</span> you will enjoy without the hassle.
      </header>


      
      <input   //yeni ekledim ama bakalım...
        type="text"
        placeholder="Search movies..."
        className="mt-4 p-2 w-full rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />




      
        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <p className="text-white">Loading ... </p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) :
          (


            <ul className="grid grid-cols-2 gap-4">
              {movieList.map((movie) => (
                <li key={movie.imdbID} className="text-white">
                  <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : './no-image.jpg'}
                    alt={movie.Title}
                    width="100"
                  />
                  <p className="mt-2">{movie.Title} ({movie.Year})</p>
                </li>
              ))}
            </ul>


            /*
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">{movie.title}</p>
                    
              ))}
            </ul>
            */
          )}
        </section>
        
     
      </div>
    </main>


  )

}



export default App;
