import React from 'react';

import './Layout.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = props => (
  <div className="Layout">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default layout;
