// libraries
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// validation schema
const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have at least 8 characters')
    }
)

const LoginForm = () => {

    // initial values for credentials
    const initialCredentials = {
        email: '',
        password: '',
    }

    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={
                    async (values) => {
                        await new Promise(res => setTimeout(res, 1000));
                        alert(JSON.stringify(values, null, 2));
                        localStorage.setItem('credentials', values);
                    }
                }
            >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                    <Form>
                        <label htmlFor='email'>Email: </label>
                        <Field id='email' name='email' type='email' />
                        {   // will show current errors on the field
                            errors.email && touched.email &&
                            <ErrorMessage name='email' component='div' />
                        }
                        <label htmlFor='password'>Password: </label>
                        <Field id='password' name='password' type='password' />
                        {   // will show current errors on the field
                            errors.password && touched.password &&
                            <ErrorMessage name='password' component='div' />
                        }
                        <button type='submit'>Login</button>
                        {isSubmitting ? <p>Login your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;