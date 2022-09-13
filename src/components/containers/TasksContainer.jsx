// libraries
import React, { useState, useEffect } from 'react';
// components
import TaskForm from '../pures/forms/TaskForm';
import TasksList from './TasksList';

const TasksContainer = () => {

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

  return (
    <main id="tasks" className='d-flex justify-content-center'>
      <div className='col-md-6 mt-3'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '244px' }}>
            <TasksList completeTask={completeTask} removeTask={removeTask} loading={loading} tasks={tasks} />
          </div>
          <div className='card-footer'>
            <TaskForm add={addTask} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TasksContainer;