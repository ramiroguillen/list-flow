// components
import TaskForm from '../components/tasks/TaskForm';
import TasksTable from './TasksTable';

const TasksContainer = () => {

  return (
    <div id="tasks" className='d-flex justify-content-center card-container'>
      <div className='col-lg-8 col-12 mt-1'>
        <div className='card card-override'>
          <div className='card-header pt-5'>
            <h5 className='text-gray'>Your tasks:</h5>
          </div>
          <div className='card-body' style={{ height: '16.5rem' }}>
            <TasksTable />
          </div>
          <div className='card-footer d-flex flex-column align-items-center'>
            <TaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;