import { useEffect } from 'react';
// hooks
import useFirestore from '../hooks/useFirestore';
// components
import TaskComponent from '../components/tasks/TaskComponent';

const TasksTable = () => {

  const { getData, loading, tasks, setTasks } = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  function sortList() {
    let sortedTasks = tasks.sort();
    setTasks(sortedTasks);
  }

  return (
    <table className='table' >
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
              <td className='text-gray'>Retrieving tasks...</td>
            </tr>
            :
            tasks.length > 0 ?
              tasks.map((task) => <TaskComponent task={task} key={task.id} />)
              :
              <tr>
                <td className='text-gray'>There are no tasks to show.</td>
              </tr>
        }
      </tbody>
    </table>
  );
}

export default TasksTable;