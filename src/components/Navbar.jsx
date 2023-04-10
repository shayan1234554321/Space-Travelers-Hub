import React from 'react'
import planetIcon from '../assets/planet.png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className='container'>
        <div>
          <img className='logo' src={planetIcon} alt="Planet Icon" />
          <h1>Space Travelers&apos; Hub </h1>
        </div>
        <ul className='linksList'>
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