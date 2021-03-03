import React, { Component } from 'react';
// import instance from '../../axios';

import AuthenticationContext from '../../contexts/IsAuthenticated';

import './Notices.scss';

class Notices extends Component {
  static contextType = AuthenticationContext;

  state = { notices: [] };

  render() {
    const button = this.context.isAuthenticated && (
      <button className="Notices-button" type="button">
        글쓰기
      </button>
    );

    return <div className="Notices">{button}</div>;
  }
}

export default Notices;
