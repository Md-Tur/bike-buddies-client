import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products.js/Products';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;