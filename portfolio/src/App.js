import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Footer/>
      </div>
    );
  }
}

export default App;
