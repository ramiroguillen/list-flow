import { useState } from 'react';
// hooks
import useFirestore from '../../hooks/useFirestore';
import useAuth from '../../hooks/useAuth';

const TaskForm = () => {

    const { addTask } = useFirestore();
    const { user } = useAuth();

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: 'normal',
        user: user.email
    }

    const [task, setTask] = useState(initialValues);

    const handleChange = ({ target: { name, value } }) => {
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask(initialValues);
    }

    return (
        <form className='d-flex flex-column mb-4' onSubmit={handleSubmit} >

            <input onChange={handleChange}
                name='name'
                type='text'
                className='form-control'
                required
                placeholder='Task Name'
            />

            <input
                onChange={handleChange}
                name='description'
                type='text'
                className='form-control mt-1'
                required
                placeholder='Task Description'

            />

            <label htmlFor='level' className='m-1 mt-3 text-gray'>Priority Level:</label>
            <select
                onChange={handleChange}
                name='level'
                className='form-select'>
                <option value='normal'>Normal</option>
                <option value='urgent'>Urgent</option>
                <option value='blocking'>Blocking</option>
            </select>

            <div className='d-flex justify-content-end'>
                <button
                    type='submit'
                    className='btn mt-3 btn-primary'
                    style={{ width: '4rem' }}>ADD
                </button>
            </div>
        </form>
    );
}

export default TaskForm;