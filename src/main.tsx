import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalCSS from "../src/components/styles/global.style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
