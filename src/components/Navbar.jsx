// hooks
import useAuth from '../hooks/useAuth';
// components
import Profile from './Profile';

const Navbar = () => {

    const { user } = useAuth();

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <span className='navbar-brand' to='/'>TDList</span>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <div className='w-100'>
                        </div>
                        <div className='justify-content-end'>
                            <div className='d-flex'>
                                {user ? <Profile /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
