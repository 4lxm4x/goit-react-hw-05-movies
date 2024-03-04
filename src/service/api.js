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

export default function api(query) {
  const credits = axios.get(`${query}`, options);

  return credits;
}
