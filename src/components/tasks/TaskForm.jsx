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
        level: '',
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
            <input onChange={handleChange} id='name' name='name' type='text' className='form-control w-100' required placeholder='Task Name' style={{ backgroundColor: '#1e1e1e', border:'none', color: 'gray' }}/>
            <input onChange={handleChange} id='description' name='description' type='text' className='form-control mt-1' required placeholder='Task Description' style={{ backgroundColor: '#1e1e1e', border:'none', color: 'gray' }}/>
            <label htmlFor='level' className='m-1 text-white'>Priority Level:</label>
            <select onChange={handleChange} name='level' className='form-select' style={{ backgroundColor: '#1e1e1e', border:'none', color: 'gray' }}>
                <option value='normal'>Normal</option>
                <option value='urgent'>Urgent</option>
                <option value='blocking'>Blocking</option>
            </select>
            <div className='d-flex justify-content-end'>
                <button onClick={handleSubmit} className='btn mt-3' style={{ backgroundColor:'#007acc', color:'white' }}>ADD TASK</button>
            </div>
        </div>
    );
}

export default TaskForm;