import { Link } from 'react-router-dom';
// hooks
import useFirestore from '../../hooks/useFirestore';
// icons
import { BsToggleOff, BsToggleOn, BsTrashFill, BsPencilSquare } from 'react-icons/bs';

const TaskComponent = ({ task }) => {

    const { completeTask, decompleteTask, removeTask, editTask } = useFirestore();

    // returns a badge depending on task's priority
    function taskLevelBadge() {
        switch (task.level) {
            case 'normal':
                return (
                    <span
                        className='badge badge-success'
                        style={{ backgroundColor: task.completed && 'var(--gray)', color: task.completed && 'var(--light-gray)' }}
                    >{task.level}</span>
                );
            case 'urgent':
                return (
                    <span
                        className='badge badge-warning'
                        style={{ backgroundColor: task.completed && 'var(--gray)', color: task.completed && 'var(--light-gray)' }}
                    >{task.level}</span>
                );
            case 'blocking':
                return (
                    <span
                        className='badge badge-danger'
                        style={{ backgroundColor: task.completed && 'var(--gray)', color: task.completed && 'var(--light-gray)' }}
                    >{task.level}</span>
                );
            default:
                break;
        }
    }

    function openEdit() {

    }
    
    return (
        <tr className='fw-normal'>
            <th>
                <Link to={`/todo-list/task/${task.id}`} style={{ textDecoration: task.completed ? 'line-through' : 'none', fontStyle: task.completed ? 'italic' : null, color: task.completed ? 'var(--gray)' : 'white' }}>{task.name}</Link>
            </th>
            <td className='overflow-scroll'
                style={{ textDecoration: task.completed ? 'line-through' : null, fontStyle: task.completed ? 'italic' : null, color: task.completed ? 'var(--gray)' : 'var(--light-gray)' }}>
                {task.description}
            </td>
            <td>{taskLevelBadge()}</td>
            <td className='text-gray'>
                {
                    task.completed ?
                        <BsToggleOn onClick={() => decompleteTask(task.id)} style={{ color: 'var(--primary-color)', marginLeft: '2rem' }} />
                        :
                        <BsToggleOff onClick={() => completeTask(task.id)} style={{ marginLeft: '2rem' }} />
                }
            </td>
            <td>
                <BsPencilSquare onClick={() => openEdit(task.id)} className='me-1 link-gray' />
                <BsTrashFill onClick={() => removeTask(task.id)} style={{ color: '#CA2E2E' }} />
            </td>
        </tr>
    );
}

export default TaskComponent;