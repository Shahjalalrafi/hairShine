import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Details from '../Details/Details';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main className=''>
            <Navbar />
            <Hero />
            <Feature />
            <Services />
            <Details />
            <Review />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default Home;