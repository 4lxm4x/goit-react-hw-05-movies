import { Outlet, NavLink, Link } from 'react-router-dom';
import './layout.css';
import { BiCameraMovie, BiMoviePlay, BiHomeAlt2 } from 'react-icons/bi';

export default function Layout() {
  return (
    <div>
      <Link to="/">
        {' '}
        <h1>
          Кінопошук
          <BiCameraMovie />
        </h1>
      </Link>

      <nav>
        <NavLink to="/">
          <BiHomeAlt2 />
          Головна
        </NavLink>
        <NavLink to="/movies">
          <BiMoviePlay /> Фільми
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
