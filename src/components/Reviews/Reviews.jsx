import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';
import './reviews.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  let firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      async function fetchMovieReviews(movieId) {
        const query = `movie/${movieId}/reviews`;
        const { data } = await api(query);

        setReviews(data.results);
      }

      fetchMovieReviews(movieId);
      firstLoad.current = false;
    }
  }, [movieId]);
  if (reviews.length === 0) {
    return (
      <div>
        <p>We don't have any reviews for this movie</p>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {reviews.map(review => {
          const { id, author, content } = review;
          return (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>

              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
