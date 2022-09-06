// libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    // lifecycle control
    useEffect(() => {

        return () => {

        }
    }, [task]);

    // returns a badge depending on task's priority
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case LEVELS.URGENT:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
            default:
                break;
        }
    }

    // returns an icon depending on task's completion level
    function taskIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task.id)} className='bi-toggle-on task-icon' style={{ color: 'green' }}></i>);
        } else {
            return (<i onClick={() => complete(task.id)} className='bi-toggle-off task-icon' style={{ color: 'grey' }}></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th><span className={'ms-2' && task.completed && 'task-completed'}>{task.name}</span></th>
            <td className={'align-middle' && task.completed && 'task-completed'}><span>{task.description}</span></td>
            <td className='align-middle'>{taskLevelBadge()}</td>
            <td className='align-middle'>{taskIcon()}</td>
            <td><i onClick={() => remove(task.id)} className='bi-trash task-icon' style={{ color: 'tomato' }}></i></td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent;