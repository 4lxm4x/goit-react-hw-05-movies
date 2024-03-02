import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { api } from 'service/api';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movieQuery, setMovieQuery] = useState(searchQuery);
  const location = useLocation();
  const load = useRef(true);

  useEffect(() => {
    if (searchQuery && load.current) {
      onMovieSearch(searchQuery);
      load.current = false;
    } else return;
  }, [searchQuery]);

  async function onMovieSearch(request) {
    const { data } = await api(
      `search/movie?query=${request}&include_adult=true&language=en-US`
    );
    setMovies(data.results);
  }

  function onSubmit(e) {
    setSearchParams({ query: movieQuery });
    e.preventDefault();
    load.current = true;
    // onMovieSearch(movieQuery);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="query"
          autoComplete="off"
          type="search"
          onChange={e => {
            setMovieQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location.search}>
                {movie.name || movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
