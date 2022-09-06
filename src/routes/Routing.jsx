// libraries
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// pages
import NotFound from '../pages/404/NotFound';
import About from '../pages/about-faqs/About';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard/Dashboard';

const Routing = () => {

    const logged = true;

    return (
        <Routes>
            <Route exact path='/' element={logged ?
                <Navigate from='/' to='/dashboard' />
                : <Navigate from='/' to='/login' />}
            />
            <Route exact path='/register' element={!logged ?
                <Register />
                : <Navigate from='/register' to='/dashboard' />}
            />
            <Route exact path='/login' element={!logged ?
                <Login />
                : <Navigate from='/login' to='/dashboard' />}
            />
            <Route exact path='/dashboard' element={logged ?
                <Dashboard />
                : <Navigate from='/dashboard' to='/login' />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/faqs' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Routing;
