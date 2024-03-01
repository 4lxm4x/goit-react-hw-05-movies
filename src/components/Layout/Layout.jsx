import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
