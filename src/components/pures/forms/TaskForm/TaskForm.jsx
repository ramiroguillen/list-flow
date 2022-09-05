// libraries
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// models
import { LEVELS } from '../../../../models/levels.enum';
import { Task } from '../../../../models/task.class';

const TaskForm = ({ add }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            null,
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control' required autoFocus placeholder='Task name' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control' required placeholder='Description' />
                <select ref={levelRef} defaultValue={1} id='selectPriority' className='form-select'>
                    <option value={1} disabled>Select a Priority level</option>
                    <option value={LEVELS.NORMAL}>NORMAL</option>
                    <option value={LEVELS.URGENT}>URGENT</option>
                    <option value={LEVELS.BLOCKING}>BLOCKING</option>
                </select>
                <button type='submit' className='btn btn-success w-100'>ADD</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default TaskForm;
