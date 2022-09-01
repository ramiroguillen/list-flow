// libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// models
import { Task } from '../../../models/task.class';

const TaskComponent = ({ task }) => {

    // lifecycle control
    useEffect(() => {
        
        return () => {
            
        }
    }, [task]);

    return (
        <tr className='fw-normal'>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'><span>{task.description}</span></td>
            <td className='align-middle'><span>{task.level}</span></td>
            <td className='align-middle'><span>{task.completed ? 'completed' : 'pending'}</span></td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;