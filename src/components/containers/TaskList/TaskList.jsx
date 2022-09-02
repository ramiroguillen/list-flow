// libraries
import React, { useState, useEffect } from 'react';
// models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
// components
import TaskComponent from '../../pures/TaskComponent/TaskComponent';
import NewTaskForm from '../../pures/forms/NewTaskForm/NewTaskForm';

const TaskList = () => {

  const task1 = new Task(1, 'example', 'default description', false, LEVELS.NORMAL);
  const task2 = new Task(2, 'example', 'default description', false, LEVELS.URGENT);
  const task3 = new Task(3, 'example', 'default description', false, LEVELS.BLOCKING);
  const task4 = new Task(4, 'example', 'default description', true, LEVELS.NORMAL);

  // states
  const [tasks, setTasks] = useState([task1, task2, task3, task4]);
  const [loading, setLoading] = useState(true);

  // lifecycle control
  useEffect(() => {

    setLoading(false);
    return () => {

    }
  }, [tasks]);

  // changes states of tasks
  function completeTask(id) {
    const tempTasks = [...tasks];
    const task = tempTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(tempTasks);
  }

  // removes a task
  function removeTask(id) {
    const tempTasks = [...tasks];
    setTasks(tempTasks.filter((task) => task.id !== id));
  }

  // adds a task
  function addTask(task) {
    const tempTasks = [...tasks];
    task.id = tempTasks.length + 1
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <section id="tasks">
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{ position: 'relative', height: '400px' }}
          >
            <table className='w-100'>
              <thead>
                <tr>
                  <th scope='col' className='col-2'>Task</th>
                  <th scope='col' className='col-6'>Description</th>
                  <th scope='col' className='col-2'>Priority</th>
                  <th scope='col' className='col-2'>Completed</th>
                  <th scope='col' className='col'></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(
                  (task) => <TaskComponent task={task} key={task.id} complete={completeTask} remove={removeTask} />
                )}
              </tbody>
            </table>
          </div>
          <NewTaskForm add={addTask} />
        </div>
      </div>
    </section>
  );
}

export default TaskList;