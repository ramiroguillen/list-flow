// libraries
import React, { useState, useEffect } from 'react';
// components
import TaskComponent from '../../pures/TaskComponent/TaskComponent';
import TaskForm from '../../pures/forms/TaskForm/TaskForm';

const TaskList = () => {

  // states
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // lifecycle control
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
    const tempTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(tempTasks);
  }

  // adds a task
  function addTask(task) {
    const tempTasks = [...tasks];
    task.id = tempTasks.length + 1
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table className='w-100'>
        <thead>
          <tr>
            <th scope='col'>Task</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Completed</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => <TaskComponent task={task} key={task.id} complete={completeTask} remove={removeTask} />)}
        </tbody>
      </table>
    )
  }

  let taskTable;

  if (tasks.length > 0) {
    taskTable = <Table />
  } else {
    taskTable = <span>There are no tasks to show</span>
  }

  return (
    <section id="tasks">
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            {loading ?
              <span>Loading...</span>
              : taskTable
            }
          </div>
          <div className='card-footer'>
            <TaskForm add={addTask} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskList;