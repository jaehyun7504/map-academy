import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/content">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
