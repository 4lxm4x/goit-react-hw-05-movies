import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY2MGFkYzllYmQ3MGE3N2E1NTJmYzg2YjExZjI4ZiIsInN1YiI6IjY1ZGY4NzQ0MTdiNWVmMDE4NmRhZTNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqDfKpFcxQg33NCwQ8F6iWv9ZxiNesjpukoJ2UTxudw',
  },
};

export function getMoviesList() {
  const data = axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  //   console.log('from api', data);

  return data;
}

export function getMovieDetails(movieId) {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  //   console.log('from api', data);

  return data;
}

export function getMovieCast(movieId) {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );

  //   console.log('from api', data);

  return data;
}
