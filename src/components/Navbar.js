import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftnav">
        <img src={logo} alt="logo" className="logo" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <ul className="links">
        <li><NavLink to="/" className="defaultlink">Rockets |</NavLink></li>
        <li><NavLink to="/Missions">Missions |</NavLink></li>
        <li><NavLink to="/MyProfile">MyProfile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
