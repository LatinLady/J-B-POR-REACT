import React from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <> 
        <Header />
        <Navigation />
        <About />
        <Portfolio />
        <Project />
        <Contact />
        <Footer />
    
    </>
  );
}

export default App;