import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../DataArray';
//import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import './MobileHeader.css';

function MobileHeader() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState(profileData);
  return (
    <div className="mobile-header-container">
      <div className="mobile-header-left">
        <div className="mobile-header-home always-active">
          <Link className="link-home" onClick={() => setClick(false)} to="/">
            <HomeIcon />
          </Link>
        </div>
      </div>
      <div className="mobile-header-center">
        {data.map((el, index) => {
          return (
            <div className="mobile-icons" key={index}>
              <ul className="mobile-icon-list">
                <li className="mobile-icon-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    href={el.socials.facebook.link}
                  >
                    <i className={el.socials.facebook.icon}></i>
                  </a>
                </li>
                <li className="mobile-icon-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    href={el.socials.twitter.link}
                  >
                    <i className={el.socials.twitter.icon}></i>
                  </a>
                </li>
                <li className="mobile-icon-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    href={el.socials.dribble.link}
                  >
                    <i className={el.socials.dribble.icon}></i>
                  </a>
                </li>
                <li className="mobile-icon-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    href={el.socials.github.link}
                  >
                    <i className={el.socials.github.icon}></i>
                  </a>
                </li>
                <li className="mobile-icon-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    href={el.socials.linkedIn.link}
                  >
                    <i className={el.socials.linkedIn.icon}></i>
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mobile-header-right">
        <div className="bar-icon" onClick={() => setClick(!click)}>
          <i className="fas fa-bars" />
        </div>
      </div>
      <nav className={click ? 'active' : ''}>
        <ul className="mobile-list">
          <li className="mobile-list-item">
            <Link className="link" to="/resume" onClick={() => setClick(false)}>
              Resume
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link
              className="link"
              to="/portfolio"
              onClick={() => setClick(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link
              className="link"
              to="/contact"
              onClick={() => setClick(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileHeader;
