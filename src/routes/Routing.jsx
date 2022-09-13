// libraries
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// pages
import NotFound from '../pages/404/NotFound';
import About from '../pages/about-faqs/About';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
// components
import Footer from '../components/pures/Footer';
import Navbar from '../components/pures/Navbar';


const Routing = () => {

    const logged = true;

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={logged ?
                    <Navigate from='/' to='/home' />
                    : <Navigate from='/' to='/signin' />}
                />
                <Route exact path='/signup' element={!logged ?
                    <SignUp />
                    : <Navigate from='/signup' to='/home' />}
                />
                <Route exact path='/signin' element={!logged ?
                    <SignIn />
                    : <Navigate from='/signin' to='/home' />}
                />
                <Route exact path='/home' element={logged ?
                    <Home />
                    : <Navigate from='/home' to='/signin' />}
                />
                <Route path='/about' element={<About />} />
                <Route path='/faqs' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>

    );
}

export default Routing;
