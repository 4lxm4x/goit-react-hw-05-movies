import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesList } from 'service/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesList() {
      await getMoviesList().then(response => {
        console.log(response.data.results);
        setMovies(response.data.results);
        // console.log(movies);
      });

      // setMovies(moviesList);
    }
    // console.log(movies);
    fetchMoviesList();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
