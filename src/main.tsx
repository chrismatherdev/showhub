import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalCSS from './global.style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
