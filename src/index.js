import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import Nav from './components/nav';
import App from './App';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Nav />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
