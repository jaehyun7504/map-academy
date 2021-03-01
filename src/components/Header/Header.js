import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import SearchBar from './SearchBar/SearchBar';
import Button from '../Button/AccountButton/AccountButton';

const header = props => (
  <header className={styles.Header}>
    <Link className={styles.Header__Logo} to="/introduction">
      MAP ACADEMY
    </Link>
    <SearchBar />
    <Button />
  </header>
);

export default header;
