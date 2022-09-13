// libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
// icons
import { BsToggleOff, BsToggleOn, BsTrash } from 'react-icons/bs';

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
            return (<BsToggleOn onClick={() => complete(task.id)} style={{ color: '#198754' }} />);
        } else {
            return (<BsToggleOff onClick={() => complete(task.id)} style={{ color: 'grey' }} />);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>{task.name}</th>
            <td className={'align-middle'}><span>{task.description}</span></td>
            <td>
                <div className='align-items-center justify-content-center'>
                    {taskLevelBadge()}
                </div>
            </td>
            <td>{taskIcon()}</td>
            <td><BsTrash onClick={() => remove(task.id)} style={{ color: '#dc3545' }} /></td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent;