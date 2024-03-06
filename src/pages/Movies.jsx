import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from 'service/api';
import './Movies.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movieQuery, setMovieQuery] = useState(searchQuery);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const load = useRef(true);

  async function getMoviesListByQuery(request) {
    const { data } = await api(
      `search/movie?query=${request}&include_adult=true&language=en-US`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    if (searchQuery && load.current) {
      getMoviesListByQuery(searchQuery);
      load.current = false;
    } else return;
  }, [searchQuery]);

  function onSubmit(e) {
    setSearchParams({ query: movieQuery });
    e.preventDefault();
    load.current = true;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="query"
          autoComplete="off"
          type="search"
          required
          onChange={e => {
            setMovieQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {!movies.length && searchQuery ? (
        <div className="noResults">За Вашим запитом стрічок немає</div>
      ) : (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id} className="movieLink">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`}
                    alt={`${movie.title}`}
                  />
                ) : (
                  <img src="https://placehold.co/45x68" alt="no_name" />
                )}

                <Link
                  to={`/movies/${movie.id}`}
                  state={`${location.pathname}${location.search}`}
                >
                  {movie.name || movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
