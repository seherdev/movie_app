const OMDB_BASE = import.meta.env.VITE_OMDB_BASE;
const OMDB_KEY = import.meta.env.VITE_OMDB_KEY;

// Filmleri isme göre ara
export async function searchMovies(query, page = 1) {
  const res = await fetch(`${OMDB_BASE}/?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}&page=${page}`);
  const data = await res.json();

  if (data.Response === 'False') throw new Error(data.Error);
  return data.Search; // [{ Title, Year, imdbID, Poster }]
}

// IMDb ID ile detay getir
export async function getMovieDetails(imdbID) {
  const res = await fetch(`${OMDB_BASE}/?apikey=${OMDB_KEY}&i=${imdbID}&plot=full`);
  const data = await res.json();

  if (data.Response === 'False') throw new Error(data.Error);
  return data;
}
