import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const navigation = () => (
  <nav className={styles.Navigation}>
    <ul className={styles.Navigation__List}>
      <li className={styles.Navigation__Item}>
        <NavLink
          className={styles.Navigation__Link}
          activeClassName={styles.Navigation__Link__Active}
          to="/introduction"
        >
          학원 소개
        </NavLink>
      </li>
      <li className={styles.Navigation__Item}>
        <NavLink
          className={styles.Navigation__Link}
          activeClassName={styles.Navigation__Link__Active}
          to="/notices"
        >
          공지 사항
        </NavLink>
      </li>
      <li className={styles.Navigation__Item}>
        <NavLink
          className={styles.Navigation__Link}
          activeClassName={styles.Navigation__Link__Active}
          to="/editorials"
        >
          사설
        </NavLink>
      </li>
      <li className={styles.Navigation__Item}>
        <NavLink
          className={styles.Navigation__Link}
          activeClassName={styles.Navigation__Link__Active}
          to="/lectures"
        >
          특강
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default navigation;
