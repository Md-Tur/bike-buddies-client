import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products.js/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
        </div>
    );
};

export default Home;