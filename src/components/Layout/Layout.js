import React from 'react';

import styles from './Layout.module.scss';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const layout = props => (
  <div className={styles.Layout}>
    <Header />
    <Navigation />
    {props.children}
  </div>
);

export default layout;
