// libraries
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

    // validation schema
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    )

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
                        {   
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