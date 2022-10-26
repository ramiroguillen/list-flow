import { useState } from "react";
// components
import SignInForm from "../components/auth/SignInForm";
import SignUpForm from "../components/auth/SignUpForm";
// icons
import { BsShieldLock } from "react-icons/bs";

const SignInContainer = () => {

    const [modalSignIn, setModalSignIn] = useState(false);
    const [modalSignUp, setModalSignUp] = useState(false);

    const handleModalSignIn = () => {
        setModalSignIn(!modalSignIn);
    }

    const handleModalSignUp = () => {
        setModalSignUp(!modalSignUp);
    }

    return (
        <section id="sign-in" className="d-flex justify-content-center section-container w-100">
            <div className="col-md-4 mt-1">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-center mt-5 text-white" >Welcome!</h2>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar="true">
                        {
                            !modalSignIn && !modalSignUp ?
                                <div className="mt-5">
                                    <h2 className="text-center mt-5 icons"><BsShieldLock /></h2>
                                    <h5 className="text-center mt-5">You need to login to access the information.</h5>
                                    <div className="container w-100 d-flex flex-column align-items-center">
                                        <button
                                            onClick={handleModalSignIn}
                                            className="btn mt-5 btn-primary"
                                        >
                                            Sign In
                                        </button>
                                        <h6 className="my-2">- or -</h6>
                                        <button
                                            onClick={handleModalSignUp}
                                            className="btn mt-1 btn-primary"
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
        </section>
    );
}

export default SignInContainer;