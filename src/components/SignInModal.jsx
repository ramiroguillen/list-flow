// libraries
import { Modal } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// hooks
import useAuth from '../hooks/useAuth';

const SignInModal = ({ show, close }) => {

    const userSchema = Yup.object().shape(
        {
            email: Yup.string().email('email is required'),
            password: Yup.string().required('password is required'),
        }
    )

    const initialValues = {
        email: '',
        password: '',
    }

    const { signIn } = useAuth();

    const handleSignIn = (values) => {
        signIn(values.email, values.password)
    }

    return (
        <Modal show={show}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Sign In</h5>
                    <button type="button" className="btn-close" onClick={close}></button>
                </div>
                <div className="modal-body">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={userSchema}
                        onSubmit={handleSignIn}
                    >
                        {({ errors, touched }) => (
                            <Form className='d-flex justify-content-center align-items-center mb-4'>
                                <div className='form-outline flex-fill'>
                                    <Field
                                        id='email'
                                        name='email'
                                        type='email'
                                        className='form-control'
                                        required
                                        placeholder='Email address'
                                    />
                                    {
                                        errors.email && touched.email &&
                                        <p className='fs-6' style={{ color: '#dc3545', fontStyle: 'italic' }}>{errors.email}</p>
                                    }
                                    <Field
                                        id='password'
                                        name='password'
                                        type='password'
                                        className='form-control mt-3'
                                        required
                                        placeholder='********'
                                    />
                                    {
                                        errors.password && touched.password &&
                                        <p className='fs-6' style={{ color: '#dc3545', fontStyle: 'italic' }}>{errors.password}</p>
                                    }
                                    <div className='d-flex justify-content-center'>
                                        <button type='submit' className='btn btn-success mt-3'>Sign In</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Modal>
    );
}

export default SignInModal;