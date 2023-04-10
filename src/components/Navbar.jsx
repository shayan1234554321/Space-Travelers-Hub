import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import planetIcon from '../assets/planet.png';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('rockets');

  return (
    <header>
      <nav className="container">
        <div>
          <img className="logo" src={planetIcon} alt="Planet Icon" />
          <h1>Space Travelers&apos; Hub </h1>
        </div>
        <ul className="linksList">
          <li>
            <Link
              onClick={() => setActive('rockets')}
              className={active === 'rockets' && 'selected'}
              to="/"
            >
              Rockets
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive('missions')}
              className={active === 'missions' && 'selected'}
              to="/missions"
            >
              Missions
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive('myProfile')}
              className={active === 'myProfile' && 'selected'}
              to="/profile"
            >
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
