import axios from 'axios';

const options = {
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY2MGFkYzllYmQ3MGE3N2E1NTJmYzg2YjExZjI4ZiIsInN1YiI6IjY1ZGY4NzQ0MTdiNWVmMDE4NmRhZTNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqDfKpFcxQg33NCwQ8F6iWv9ZxiNesjpukoJ2UTxudw',
  },
};

// export function getMoviesList() {
//   const data = axios.get('trending/all/day?language=en-US', options);

//   return data;
// }

// export function getMovieDetails(movieId) {
//   const data = axios.get(`movie/${movieId}`, options);

//   return data;
// }

// export function getMovieCredits(movieId) {
//   const credits = axios.get(`movie/${movieId}/credits`, options);

//   return credits;
// }

export function api(query) {
  // console.log('🚀 ~ api ~ query:', query);
  const credits = axios.get(`${query}`, options);

  return credits;
}
