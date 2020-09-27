import React from 'react';
import { Link } from 'react-router-dom';

import style from './../App.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className={style.logo}>
        Express
      </Link>
      <ul>
        <li>
          <Link to="/tracking" className={style.links}>
            Tracking
          </Link>
        </li>
        <li>
          <Link to="/quotes" className={style.links}>
            Quotes
          </Link>
        </li>
        <li>
          <Link to="/about" className={style.links}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className={style.links}>
            <button>Book a Delivery</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
