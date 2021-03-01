import React, { Component } from 'react';

import './App.scss';

import AuthenticationContext from './contexts/IsAuthenticated';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <AuthenticationContext.Provider>
        <Layout />
      </AuthenticationContext.Provider>
    );
  }
}

export default App;
