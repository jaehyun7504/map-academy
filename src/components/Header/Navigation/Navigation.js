import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const navigation = () => (
  <nav className="Navigation">
    <table className="Navigation-list">
      <li className="Navigation-item">
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to="/about"
        >
          학원 소개
        </NavLink>
      </li>
      <li className="Navigation-item">
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to="/notices"
        >
          공지 사항
        </NavLink>
      </li>
      <li className="Navigation-item">
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to="/articles"
        >
          사설
        </NavLink>
      </li>
      <li className="Navigation-item">
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to="/lectures"
        >
          특강
        </NavLink>
      </li>
    </table>
  </nav>
);

export default navigation;
