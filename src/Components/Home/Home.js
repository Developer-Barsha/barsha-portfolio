import React from 'react';
import About from './About';
import Bg from './Bg';
import Contact from './Contact';
import Gallery from './Gallery';
import Intro from './Intro';
import Portfolios from './Portfolios';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Skills/>
            <Services/>
            <Bg/>
            <Portfolios/>
            <Gallery/>
            <Contact/>
        </div>
    )
}

export default Home;