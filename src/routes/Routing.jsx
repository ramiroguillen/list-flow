// libraries
import { Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/Home';
// components
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import TaskDetails from '../components/tasks/TaskDetails';
import React from 'react';


const Routing = () => {

    return (
        <div style={{ height: '100vh', width:'100vw' }}>
            <Navbar />
            <Routes>
                <Route exact path='/todo-list' element={<Home />} />
                <Route path='/todo-list/task/:id' element={<TaskDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routing;
