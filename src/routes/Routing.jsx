// libraries
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import React from "react";
import useAuth from "../hooks/useAuth";
import ItemTableContainer from "../containers/ItemTableContainer";
import SignInContainer from "../containers/SignInContainer";
import ScheduleContainer from "../containers/ScheduleContainer";


const Routing = () => {

    const { user } = useAuth();

    return (
        <div className="app">
            <Navbar />
            <Routes>
                {
                    user &&
                    <>
                        <Route exact path="/list-flow" element={<Navigate to ="/list-flow/tasks" />} />
                        <Route exact path="/list-flow/tasks" element={<ItemTableContainer />} />
                        <Route exact path="/list-flow/agenda" element={<ScheduleContainer />} />
                    </>

                }
                <Route path="/*" element={<SignInContainer />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routing;
