import React from 'react';
import { NavLink } from 'react-router-dom';
import planetIcon from '../assets/planet.png';
import '../Styles/Navbar.css';

const Navbar = () => (
  <header>
    <nav className="container">
      <div>
        <img className="logo" src={planetIcon} alt="Planet Icon" />
        <h1>Space Travelers&apos; Hub </h1>
      </div>
      <ul className="linksList">
        <li>
          <NavLink
            to="/"
            activeclassname="active"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            activeclassname="active"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            activeclassname="active"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
