import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from 'service/api';
import './Home.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  let firstLoad = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (firstLoad.current) {
      async function getMoviesList() {
        const query = `trending/all/day?language=en-US`;
        const { data } = await api(query);
        setMovies(data.results);
      }
      getMoviesList();
    }

    firstLoad.current = false;
  }, []);
  return (
    <div>
      <h1>В тренді</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li className="movieLink" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`}
                alt={movie.title}
              />
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
