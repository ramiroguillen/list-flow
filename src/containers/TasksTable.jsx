import { useEffect } from 'react';
// hooks
import useAuth from '../hooks/useAuth';
import useFirestore from '../hooks/useFirestore';
// components
import TaskComponent from '../components/tasks/TaskComponent';

const TasksTable = () => {

  const { user } = useAuth();

  const { getData, loading, tasks } = useFirestore();

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  return (
    <table className='w-100 table' style={{ backgroundColor: '#252526' }}>
      <thead>
        <tr>
          <th scope='col' className='text-white'>Task</th>
          <th scope='col' className='text-white'>Description</th>
          <th scope='col' className='text-white'>Priority</th>
          <th scope='col' className='text-white'>Completed</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {
          loading ?
            <tr>
              <th scope='col-5'>Retrieving tasks...</th>
            </tr>
            :
            tasks.length > 0 ?
              tasks.map((task) => <TaskComponent task={task} key={task.id} />)
              :
              <tr>
                <th scope='col-5'>There are no tasks to show.</th>
              </tr>
        }
      </tbody>
    </table>
  );
}

export default TasksTable;