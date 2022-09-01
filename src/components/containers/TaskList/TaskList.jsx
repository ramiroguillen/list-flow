// libraries
import React, { useState, useEffect } from 'react';
// models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
// components
import TaskComponent from '../../pures/TaskComponent/TaskComponent';

const TaskList = () => {

  const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL);

  // states
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // lifecycle control
  useEffect(() => {

    setLoading(false);
    return () => {

    }
  }, [tasks]);

  return (
    <>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>
              <tbody>
                <TaskComponent task={defaultTask} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;