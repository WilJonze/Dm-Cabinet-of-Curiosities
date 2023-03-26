import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './assets/cc_layout_2.png'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className='title'>Monster Mash</h1>
        </div>
        <ul>
           <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/code" activeClassName="active">
              Code
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;