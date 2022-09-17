import { useState } from 'react';
// hooks
import useAuth from '../../hooks/useAuth';

const SignUpForm = ({ show }) => {

    const initialValues = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState(initialValues);

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const { signUp } = useAuth();

    const handleSignUp = () => {
        signUp(user);
    }

    return (
        <div className='mt-5'>
            <div className='d-flex flex-column align-items-center'>
                <label htmlFor='email' className='form-label'>
                    <input onChange={handleChange} id='email' name='email' type='email' className='form-control' required placeholder='Email address' style={{ width: '16rem' }} />
                </label>
                <label htmlFor='password' className='form-label'>
                    <input onChange={handleChange} id='password' name='password' type='password' className='form-control mt-3' required placeholder='********' style={{ width: '16rem' }} />
                </label>
                <div className='d-flex justify-content-center'>
                    <button onClick={handleSignUp} className='btn btn-primary mt-3' style={{ width: '16rem', backgroundColor: '#007acc' }}>Sign Up</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button onClick={show} className='btn mt-3' style={{ backgroundColor: '#3e3e42', color:'white' }}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;