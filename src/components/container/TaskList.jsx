/* libraries */
import React from 'react';
/* models */
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
/* components */
import TaskComponent from '../pure/TaskComponent';

const TaskList = () => {

  const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL);

  return (
    <>
      <h1>Your tasks: </h1>
      <div>
        <TaskComponent task={defaultTask} />
      </div>
    </>
  );
};

export default TaskList;