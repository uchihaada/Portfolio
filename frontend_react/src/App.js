import React from 'react';

import { About, Footer, Skills, Testimonials, Work, Header } from './container';
import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (

    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
