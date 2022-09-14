// libraries
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// context
import { TasksContext } from '../context/TasksContext';

const TaskForm = () => {

    const { handleAddTask } = useContext(TasksContext);

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().required('Task name is required'),
            description: Yup.string().required('Description is required'),
            level: Yup.string().oneOf(['normal', 'urgent', 'blocking']).required('Priority level is required'),
        }
    )

    const initialValues = {
        name: '',
        description: '',
        level: 'normal',
    }

    const handleSubmit = (values) => {
        const newTask = {
            name: values.name,
            description: values.description,
            completed: false,
            level: values.level
        }
        handleAddTask(newTask);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
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
                        <label htmlFor='level' className='form-label ms-1 mt-1'>Priority:</label>
                        <Field as='select' name='level' className='form-select'>
                            <option value='normal'>Normal</option>
                            <option value='urgent'>Urgent</option>
                            <option value='blocking'>Blocking</option>
                        </Field>
                        <div className='d-flex justify-content-end'>
                            <button type='submit' className='btn btn-success mt-3'>ADD</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default TaskForm;