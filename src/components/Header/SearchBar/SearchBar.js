import React from 'react';

import styles from './SearchBar.module.scss';

const searchBar = props => (
  <form className={styles.Search}>
    <input className={styles.Search__Input} type="search" name="search" />
    <button
      className={styles.Search__Button}
      type="button"
      onClick={e => e.preventDefault()}
    >
      <svg viewBox="0 0 512 512">
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke-miterlimit="10"
          stroke-width="42"
        />
        <path
          d="M338.29 338.29L448 448"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="42"
        />
      </svg>
    </button>
  </form>
);

export default searchBar;
