import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import logo from './logo.png';

const Navbar = () => (
  <nav className="nav-bar">
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <ul className="links">
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <span className="separator">|</span>
      <li>
        <NavLink to="/myprofile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
