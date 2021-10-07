import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import MyButton from './MyButton';

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <ul className="header-list">
          <li className="header-list-item always-active">
            <Link className="link-home" to="/">
              <HomeIcon />
            </Link>
          </li>
          <li className="header-list-item">
            <NavLink className="link" activeClassName="active" to="/resume">
              Resume
            </NavLink>
          </li>
          <li className="header-list-item">
            <NavLink className="link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="header-list-item">
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <Link className="header-link" to="/contact">
          {' '}
          <MyButton
            text={'Hire Me'}
            icon={<i className="fas fa-paper-plane"></i>}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
