import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import api from 'service/api';
import { useEffect, useState, useRef } from 'react';
import './movieDetails.css';
import {
  IoCaretBackCircleOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
} from 'react-icons/io5';

export default function MovieDetails() {
  const { movieId } = useParams();
  let firstLoad = useRef(true);
  const location = useLocation();

  const [movieInfo, setMovieInfo] = useState();

  const backLink = useRef(location.state ? `${location.state}` : `/movies`);

  useEffect(() => {
    if (firstLoad.current) {
      async function getMovieDetails(movieId) {
        const query = `movie/${movieId}`;

        const { data } = await api(query);
        const {
          title,
          genres,
          release_date,
          overview,
          popularity,
          poster_path,
        } = data;
        setMovieInfo({
          title,
          genres,
          release_date,
          overview,
          popularity,
          poster_path,
        });
      }
      getMovieDetails(movieId);
      firstLoad.current = false;
    }
  }, [movieId]);

  if (!movieInfo) return;
  else {
    const { title, genres, release_date, overview, popularity, poster_path } =
      movieInfo;
    return (
      <div className="movie">
        {
          <Link to={backLink.current} className="backButton">
            <IoCaretBackCircleOutline />
            Повернутися до списку фільмів
          </Link>
        }
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
              <NavLink to="cast">
                <IoPeopleOutline />В ролях
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews">
                <IoNewspaperOutline />
                Огляди
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
  }
}
