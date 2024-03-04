import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  // const location = useLocation();
  // console.log('🚀 ~ Layout ~ location :', location);
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
