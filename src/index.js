import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import App from './App';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
