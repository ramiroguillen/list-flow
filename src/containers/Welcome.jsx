import { useState } from 'react';
// components
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
// icons
import { BsKey, BsShieldLock } from 'react-icons/bs';

const Welcome = () => {

    const [modalSignIn, setModalSignIn] = useState(false);
    const [modalSignUp, setModalSignUp] = useState(false);

    const handleModalSignIn = () => {
        setModalSignIn(!modalSignIn);
    }

    const handleModalSignUp = () => {
        setModalSignUp(!modalSignUp);
    }

    return (
        <div id="tasks" className='d-flex justify-content-center tasks-container' style={{ height: '80%', backgroundColor: '#1e1e1e' }}>
            <div className='col-md-4 mt-1'>
                <div className='card' style={{ borderColor: 'black', height: '98%' }}>
                    <div className='card-header' style={{ backgroundColor: '#2d2d30' }}>
                        <h2 className="text-center mt-5 text-white">Welcome!</h2>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ backgroundColor: '#252526', paddingBottom:'6rem' }}>
                        {
                            !modalSignIn && !modalSignUp ?
                                <div className="mt-5">
                                    <h2 className="text-center mt-5" style={{ color: '#007acc' }}><BsKey /> <BsShieldLock /></h2>
                                    <h5 className="text-center mt-5 text-white">You need to login to access the information.</h5>
                                    <div className='container w-100 d-flex flex-column align-items-center'>
                                        <button
                                            onClick={handleModalSignIn}
                                            className='btn mt-5'
                                            style={{ width: "8rem", backgroundColor:'#007acc', color: 'white' }}
                                        >
                                            Sign In
                                        </button>
                                        <h6 className='my-2 text-white'>- or -</h6>
                                        <button
                                            onClick={handleModalSignUp}
                                            className='btn mt-1'
                                            style={{ width: "8rem", backgroundColor:'#007acc', color: 'white' }}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                                :
                                modalSignIn ?
                                    <SignInForm show={handleModalSignIn} />
                                    :
                                    modalSignUp &&
                                    <SignUpForm show={handleModalSignUp} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;