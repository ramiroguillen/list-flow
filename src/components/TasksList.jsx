// hooks
import useFirestore from '../hooks/useFirestore';
// components
import TaskComponent from './TaskComponent';

const TasksList = () => {

  const { loading, tasks } = useFirestore();

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

export default TasksList;