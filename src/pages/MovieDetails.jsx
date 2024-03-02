import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { api } from 'service/api';
import { useEffect, useState, useRef } from 'react';
import './movieDetails.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  let firstLoad = useRef(true);
  const location = useLocation();

  const [movieInfo, setMovieInfo] = useState();
  const backLink = useRef(
    location.state ? `/movies${location.state}` : `/movies`
  );

  useEffect(() => {
    if (firstLoad.current) {
      async function fetchMovieDetails(movieId) {
        const query = `movie/${movieId}`;

        await api(query).then(response => {
          const {
            title,
            genres,
            release_date,
            overview,
            popularity,
            poster_path,
          } = response.data;
          setMovieInfo({
            title,
            genres,
            release_date,
            overview,
            popularity,
            poster_path,
          });
        });
      }
      fetchMovieDetails(movieId);
      firstLoad.current = false;
    }
  }, [movieId]);

  if (!movieInfo) return;
  else {
    const { title, genres, release_date, overview, popularity, poster_path } =
      movieInfo;
    return (
      <div className="movie">
        {<Link to={backLink.current}>Go Back</Link>}
        <br></br>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="info">
          <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
          <p>User score: {Math.round(popularity)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
  }
}
