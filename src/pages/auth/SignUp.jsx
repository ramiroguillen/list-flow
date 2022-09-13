// libraries
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// models
import { ROLES } from '../../models/roles.enum';

const Register = () => {

    // validation schema   
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username must have at least 6 characters')
                .max(12, 'Username must not be longer than 12 characters')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must have at least 8 characters'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                })
                .required('Password must be confirmed'),
        }
    )

    // initial values for credentials
    const initialCredentials = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
        tasks: [],
    }
    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={initialCredentials}
                validationSchema={registerSchema}
                onSubmit={
                    async (values) => {
                        await new Promise(res => setTimeout(res, 1000));
                        alert(JSON.stringify(values, null, 2));
                    }
                }
            >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                    <Form>
                        <label htmlFor='username'>Username: </label>
                        <Field id='username' name='username' type='text' />
                        {   // will show current errors on the field
                            errors.username && touched.username &&
                            <ErrorMessage name='username' component='div' />
                        }
                        <label htmlFor='email'>Email: </label>
                        <Field id='email' name='email' type='email' />
                        {   
                            errors.email && touched.email &&
                            <ErrorMessage name='email' component='div' />
                        }
                        <label htmlFor='password'>Password: </label>
                        <Field id='password' name='password' type='password' />
                        {   
                            errors.password && touched.password &&
                            <ErrorMessage name='password' component='div' />
                        }
                        <label htmlFor='confirm'>Confirm Password: </label>
                        <Field id='password' name='confirm' type='password' />
                        {   
                            errors.confirm && touched.confirm &&
                            <ErrorMessage name='confirm' component='div' />
                        }
                        <button type='submit'>Register</button>
                        {isSubmitting ? <p>Creating user...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;
