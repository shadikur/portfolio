import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import PreLoader from './components/PreLoader/PreLoader';
import './App.css';
import Skills from './components/Skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 2000,
    once: true
});

const App = () => {
    return (
        <>
            <PreLoader>
                <Header></Header>
                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>
            </PreLoader>
        </>
    );
};

export default App;