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
        <form className='d-flex flex-column mb-4' onSubmit={handleSubmit} style={{ width: '40%' }}>
            <input onChange={handleChange} name='name' type='text' className='form-control w-100' required placeholder='Task Name' style={{ backgroundColor: '#1e1e1e', border: 'none', color: 'white' }} />
            <input onChange={handleChange} name='description' type='text' className='form-control mt-1' required placeholder='Task Description' style={{ backgroundColor: '#1e1e1e', border: 'none', color: 'white' }} />
            <label htmlFor='level' className='m-1 text-white'>Priority Level:</label>
            <select onChange={handleChange} name='level' className='form-select' style={{ backgroundColor: '#1e1e1e', border: 'none', color: 'gray' }}>
                <option value='normal'>Normal</option>
                <option value='urgent'>Urgent</option>
                <option value='blocking'>Blocking</option>
            </select>
            <div className='d-flex justify-content-end'>
                <button type='submit' className='btn mt-3' style={{ backgroundColor: '#007acc', color: 'white' }}>ADD</button>
            </div>
        </form>
    );
}

export default TaskForm;