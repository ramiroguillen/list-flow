import { Link } from 'react-router-dom';
// hooks
import useFirestore from '../../hooks/useFirestore';
// icons
import { BsToggleOff, BsToggleOn, BsTrashFill } from 'react-icons/bs';

const TaskComponent = ({ task }) => {

    const { completeTask, decompleteTask, removeTask } = useFirestore();

    // returns a badge depending on task's priority
    function taskLevelBadge() {
        switch (task.level) {
            case 'normal':
                return (<h6 className='mb-0'><span className='badge text-dark' style={{ backgroundColor: task.completed ? '#6c757d' : '#007acc' }}>{task.level}</span></h6>);
            case 'urgent':
                return (<h6 className='mb-0'><span className={task.completed === true ? ' badge bg-secondary text-dark' : 'badge bg-warning text-dark'}>{task.level}</span></h6>);
            case 'blocking':
                return (<h6 className='mb-0'><span className={task.completed === true ? ' badge bg-secondary text-dark' : 'badge bg-danger text-dark'}>{task.level}</span></h6>);
            default:
                break;
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <Link to={`/todo-list/task/${task.id}`} style={{ textDecoration: task.completed ? 'line-through' : 'none', fontStyle: task.completed ? 'italic' : null, color: task.completed ? '#6c757d' : 'white' }}>{task.name}</Link>
            </th>
            <td className='overflow-scroll' 
            style={{ textDecoration: task.completed ? 'line-through' : null, fontStyle: task.completed ? 'italic' : null, color: task.completed ? '#6c757d' : 'white' }}>
                {task.description}
            </td>
            <td>{taskLevelBadge()}</td>
            <td className='text-secondary'>
                {
                    task.completed ?
                        <BsToggleOn
                            onClick={() => decompleteTask(task.id)}
                            style={{ color: '#198754', marginLeft: '2rem' }}
                        />
                        :
                        <BsToggleOff
                            onClick={() => completeTask(task.id)}
                            style={{ marginLeft: '2rem' }}
                        />
                }
            </td>
            <td><BsTrashFill onClick={() => removeTask(task.id)} style={{ color: '#dc3545' }} /></td>
        </tr>
    );
}

export default TaskComponent;