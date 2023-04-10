import React from 'react'
import planetIcon from '../assets/planet.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={planetIcon} alt="Planet Icon" />
        <h1>Space Travelers&apos; Hub </h1>
        <ul>
          <li>
            <Link to='/'>Rockets</Link>
          </li>
          <li>
            <Link to='/missions'>Missions</Link>
          </li>
          <li>
            <Link to='/profile'>My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar