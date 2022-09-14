// libraries
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// components
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Navbar = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <span className='navbar-brand' to='/'>TODO List</span>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <div className='w-100'>
                        </div>
                        <div className='justify-content-end'>
                            {isAuthenticated ?
                                <div className='d-flex'>
                                    <Profile />
                                    <LogoutButton />
                                </div>
                                :
                                <LoginButton />
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
