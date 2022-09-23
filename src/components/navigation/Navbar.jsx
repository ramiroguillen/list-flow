import {Link} from 'react-router-dom';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Profile from './Profile';

const Navbar = () => {

    const { user } = useAuth();

    return (
        <nav className='navbar navbar-expand-lg navbar-dark overflow-hidden py-2' style={{ minHeight:'7.5%', backgroundColor: '#252526' }}>
            <div className='container-fluid ms-3'>
                <Link className='navbar-brand' to='/todo-list'>TDList</Link>
                {
                    user ?
                        <>
                            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarNav'>
                                <div className='w-100'>
                                </div>
                                <div className='justify-content-end me-3'>
                                    <div className='d-flex'>
                                        {user ? <Profile /> : null}
                                    </div>
                                </div>
                            </div>
                        </> : null
                }
            </div>
        </nav>
    );
}

export default Navbar;
