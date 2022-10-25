import { useState } from "react";
// hooks
import useAuth from "../../hooks/useAuth";
// icons
import { BsGoogle } from "react-icons/bs";


const SignInForm = ({ show }) => {

    const initialValues = {
        email: "",
        password: "",
    }

    const [user, setUser] = useState(initialValues);

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const { signIn, googleSignIn } = useAuth();

    const handleSignIn = (user) => {
        signIn(user);
    }

    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    return (
        <div className="mt-5">
            <form className="d-flex flex-column align-items-center">
                <label htmlFor="email" className="form-label">
                    <input onChange={handleChange} id="email" name="email" type="email" className="form-control input" required placeholder="Email address" />
                </label>
                <label htmlFor="password" className="form-label">
                    <input onChange={handleChange} id="password" name="password" type="password" className="form-control mt-3 input" required placeholder="********" />
                </label>
                <div className="d-flex justify-content-center">
                    <button onClick={handleSignIn}
                        className="btn mt-3 btn-secondary"
                        >Sign In</button>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={handleGoogleSignIn}
                        className="btn mt-3 d-flex align-items-center justify-content-center btn-primary">
                        <BsGoogle className="me-3" />
                        Sign In with Google
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={show} className="btn mt-3 btn-info">Back</button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;