import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import Nav from './components/nav';
import Header from './components/header';
import Features from './components/features';
import Contents from './components/contents';
import Gallery from './components/gallery';
import Partners from './components/partners';
import Testimonials from './components/testimonials';
import Experience from './components/experience';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Nav />
    <Header />
    <Features />
    <Contents />
    <Gallery />
    <Partners />
    <Testimonials />
    <Experience />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
