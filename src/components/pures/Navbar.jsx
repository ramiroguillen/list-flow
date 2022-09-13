// libraries
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const signout = () => {
        navigate('/signin');
    }

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>Navbar</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <div className='w-100'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/about'>About</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/faqs'>FAQs</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/profile'>Profile</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='justify-content-end'>
                            <button className='btn btn-danger' onClick={signout} style={{ width: "128px"}}>Sign Out</button>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;
