import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';
import CastProfile from './CastProfile';
import './cast.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  let firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      async function fetchMovieCredits(movieId) {
        const query = `movie/${movieId}/credits`;
        const credits = await api(query);
        setCast(credits.data.cast);
      }

      fetchMovieCredits(movieId);
      firstLoad.current = false;
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <CastProfile info={actor} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
