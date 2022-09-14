// libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/home/Home';
// components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Routing = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>

    );
}

export default Routing;
