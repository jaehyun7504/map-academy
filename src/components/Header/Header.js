import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Navigation from './Navigation/Navigation';

const header = () => (
  <header className="Header">
    <Link className="Header-logo" to="/about">
      MAP ACADEMY
    </Link>
    <Navigation />
    <button className="Header-button" type="button">
      로그인
    </button>
  </header>
);

export default header;
