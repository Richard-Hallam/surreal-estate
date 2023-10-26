import React from 'react';
import '../styles/Navbar.css';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <img src="src/logo.png" alt="surreal estate logo" />
      <ul className='navbar-links'>
        <li className='navbar-links-item'>View Properties</li>
        <li className='navbar-links-item'>Add Properties</li>
      </ul>
    </div>
  );
};

export default NavBar;
