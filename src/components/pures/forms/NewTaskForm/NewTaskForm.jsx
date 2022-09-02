// libraries
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// models
import { LEVELS } from '../../../../models/levels.enum';
import { Task } from '../../../../models/task.class';

const NewTaskForm = ({ add }) => {

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
        )
        add(newTask);
    }

    return (
        <form
            onSubmit={addTask}
            className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input
                    ref={nameRef}
                    id='inputName'
                    type='text'
                    className='form-control form-control-lg'
                    required
                    autoFocus
                    placeholder='Task name'
                />
                <input
                    ref={descriptionRef}
                    id='inputDescription'
                    type='text'
                    className='form-control form-control-lg'
                    required
                    placeholder='Description'
                />
                <label htmlFor='selectPriority' className='sr-only'>Priority:
                    <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectPriority'>
                        <option value={LEVELS.NORMAL}>NORMAL</option>
                        <option value={LEVELS.URGENT}>URGENT</option>
                        <option value={LEVELS.BLOCKING}>BLOCKING</option>
                    </select>
                </label>
                <button type='submit' className='btn btn-primary btn-lg ms-3'>ADD</button>
            </div>
        </form>
    );
}

NewTaskForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default NewTaskForm;
