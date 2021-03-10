import React, { Component } from 'react';
// import instance from '../../axios';

import AuthenticationContext from '../../contexts/IsAuthenticated';

import './Articles.scss';

class Articles extends Component {
  static contextType = AuthenticationContext;

  state = { articles: [] };

  render() {
    const button = this.context.isAuthenticated && (
      <button className="Articles-button" type="button">
        글쓰기
      </button>
    );

    return <div className="Articles">{button}</div>;
  }
}

export default Articles;
