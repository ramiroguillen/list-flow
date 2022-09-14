// libraries
import React from 'react';
// components
import TaskForm from './TaskForm';
import TasksList from './TasksList';

const TasksContainer = () => {

  return (
    <main id="tasks" className='d-flex justify-content-center'>
      <div className='col-md-6 mt-3'>
        <div className='card' style={{ position: 'relative', height: '32rem' }}>
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' >
            <TasksList />
          </div>
          <div className='card-footer'>
            <TaskForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TasksContainer;