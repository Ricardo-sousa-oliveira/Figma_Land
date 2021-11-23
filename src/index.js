import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
