import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from 'service/api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  let firstLoad = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (firstLoad.current) {
      async function fetchMoviesList() {
        const query = `trending/all/day?language=en-US`;
        const { data } = await api(query);
        setMovies(data.results);
      }

      fetchMoviesList();
    }
    firstLoad.current = false;
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location.pathname}>
                {movie.name || movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
