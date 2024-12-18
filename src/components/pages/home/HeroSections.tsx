import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import News from './news/News';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';

const HeroSections = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <News/>
      <Gallery/>
      <Contact/>
    </div>
  );
};

export default HeroSections;