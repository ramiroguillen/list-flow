// libraries
import { Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/Home';
// components
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import React from 'react';


const Routing = () => {

    return (
        <div style={{ height: '100vh' }}>
            <Navbar />
            <Routes>
                <Route exact path='/todo-list' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routing;
