import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/api';

export default function Cast() {
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast(movieId) {
      await getMovieCast(movieId).then(response => {
        const { cast } = response.data;
        cast.map(actor => {
          const { profile_path, name, character } = actor;
        });
      });
    }
    fetchMovieCast(movieId);
  }, [movieId]);

  return <div>{}</div>;
}
