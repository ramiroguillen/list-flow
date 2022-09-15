import { useState } from 'react';
// components
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
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
        <main id="tasks" className='d-flex justify-content-center'>
            <div className='col-md-6 mt-3'>
                <div className='card' style={{ position: 'relative', height: '32rem' }}>
                    <div className='card-body' data-mdb-perfect-scrollbar='true'>
                        <h2 className="text-center mt-5">Welcome!</h2>
                        {
                            !modalSignIn && !modalSignUp ?
                                <div className="mt-5">
                                    <h2 className="text-center mt-5"><BsKey /> <BsShieldLock /></h2>
                                    <h4 className="text-center mt-5">You need to login to access the information.</h4>
                                    <div className='container w-100 d-flex flex-column align-items-center'>
                                        <button
                                            onClick={handleModalSignIn}
                                            className='btn btn-success mt-5'
                                            style={{ width: "6rem" }}
                                        >
                                            Sign In
                                        </button>
                                        <h5 className='mt-1'>- or -</h5>
                                        <button
                                            onClick={handleModalSignUp}
                                            className='btn btn-primary mt-1'
                                            style={{ width: "6rem" }}
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
        </main>
    );
}

export default Welcome;