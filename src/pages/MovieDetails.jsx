import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    async function fetchMovieDetails(movieId) {
      await getMovieDetails(movieId).then(response => {
        console.log(response);
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
  }, [movieId]);

  if (!movieInfo) return;
  else {
    const { title, genres, release_date, overview, popularity, poster_path } =
      movieInfo;
    return (
      <div className="movie">
        <Link to="/movies">Go Back</Link> <br></br>
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
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
  }
}
