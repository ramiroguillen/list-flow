// components
import TaskForm from '../components/tasks/TaskForm';
import TasksTable from './TasksTable';

const TasksContainer = () => {

  return (
    <div id="tasks" className='d-flex justify-content-center' style={{ height: '80%', backgroundColor: '#1e1e1e' }}>
      <div className='col-md-8 mt-1'>
        <div className='card' style={{ borderColor: 'black', height: '98%' }}>
          <div className='card-header pt-5' style={{ backgroundColor: '#2d2d30' }}>
            <h5 className='text-white'>Your tasks:</h5>
          </div>
          <div className='card-body overflow-auto' data-mdb-perfect-scrollbar='true' style={{ padding: '0px', backgroundColor: '#252526' }}>
            <TasksTable />
          </div>
          <div className='card-footer' style={{ backgroundColor: '#2d2d30' }}>
            <TaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;