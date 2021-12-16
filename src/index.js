import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import Nav from './Components/nav';
import Header from './Components/header';
import Features from './Components/features';
import Contents from './Components/contents';
import Gallery from './Components/gallery';
import Partners from './Components/partners';
import Testimonials from './Components/testimonials';
import Experience from './Components/experience';
import Footer from './Components/footer';

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
