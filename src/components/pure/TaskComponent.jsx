/* libraries */
import React from 'react';
import PropTypes from 'prop-types';
/* models */
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Name: {task.name}</h2>
            <h3>Description: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            <h5>Progression: {task.completed ? 'completed' : 'pending'}</h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;