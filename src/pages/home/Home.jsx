// libraries
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// components
import TasksContainer from '../../components/TasksContainer';
import Welcome from '../../components/Welcome';

const Home = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <TasksContainer /> : <Welcome />}
        </>
    );
}

export default Home;
