import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default App;