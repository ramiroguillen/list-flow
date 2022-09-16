import { useState } from 'react';
// hooks
import useFirestore from '../hooks/useFirestore';
import useAuth from '../hooks/useAuth';

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

    const handleSubmit = () => {
        addTask(task);
    }

    return (
        <div className='d-flex flex-column mb-4'>
            <input onChange={handleChange} id='name' name='name' type='text' className='form-control w-100' required placeholder='Task Name' />
            <input onChange={handleChange} id='description' name='description' type='text' className='form-control' required placeholder='Task Description' />
            <label htmlFor='level' className='m-1'>Priority Level:</label>
            <select name='level' className='form-select'>
                <option value='normal'>Normal</option>
                <option value='urgent'>Urgent</option>
                <option value='blocking'>Blocking</option>
            </select>
            <div className='d-flex justify-content-end'>
                <button onClick={handleSubmit} className='btn btn-success mt-3'>ADD TASK</button>
            </div>
        </div>
    );
}

export default TaskForm;