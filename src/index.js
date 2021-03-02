import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import AuthenticationContext from './contexts/IsAuthenticated';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ isAuthenticated: false }}>
        <App />
      </AuthenticationContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
