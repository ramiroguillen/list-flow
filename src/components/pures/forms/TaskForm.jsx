// libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// models
import { LEVELS } from '../../../../models/levels.enum';
import { Task } from '../../../../models/task.class';

const TaskForm = ({ add }) => {

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().required('Task name is required'),
            description: Yup.string().required('Description is required'),
            level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING]).required('Priority level is required'),
        }
    )

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={
                (values) => {
                    const newTask = new Task(
                        null,
                        values.name,
                        values.description,
                        false,
                        values.level
                    );
                    add(newTask);
                }
            }
        >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <Form className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                        <Field id='name' name='name' type='text' className='form-control' required placeholder='Task name'></Field>
                        {
                            errors.name && touched.name &&
                            <ErrorMessage name='name' component='div' />
                        }
                        <Field id='description' name='description' type='text' className='form-control' required placeholder='Description'></Field>
                        {
                            errors.description && touched.description &&
                            <ErrorMessage name='description' component='div' />
                        }
                        <label htmlFor='level' className='form-label'>Priority:</label>
                        <Field as='select' name='level' className='form-select'>
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <button type='submit' className='btn btn-success w-100'>ADD</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default TaskForm;
