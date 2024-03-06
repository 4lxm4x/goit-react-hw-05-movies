import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ReactLoading from 'react-loading';
// import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast'; //если делать через лейзи импорт выходит некрасиво, оно ререндерит заново всю страницу и скроллит вверх
import Reviews from './Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div>
          <ReactLoading type="spin" color="red" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails state={location.pathname} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
