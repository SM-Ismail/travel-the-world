import React from 'react';
import Header from '../Header/Header';
import Destinations from '../Destinations/Destinations';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import Stories from '../Stories/Stories';

const Home = () => {
    return (
        <div>
            <Header />
            <Destinations />
            <Services />
            <Stories />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;