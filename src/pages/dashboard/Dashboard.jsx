// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Copyright from '../../components/pures/Copyright';
// material UI
import Button from '@mui/material/Button';

const DashboardPage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    }

    return (
        <>
            <Button variant='contained' onClick={logout}>Logout</Button>
            <Copyright />
        </>
    );
}

export default DashboardPage;
