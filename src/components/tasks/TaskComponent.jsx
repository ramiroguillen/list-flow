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
                return (<h6 className='mb-0'><span className='badge text-dark' style={{ backgroundColor: '#007acc' }}>{task.level}</span></h6>);
            case 'urgent':
                return (<h6 className='mb-0'><span className='badge bg-warning text-dark'>{task.level}</span></h6>);
            case 'blocking':
                return (<h6 className='mb-0'><span className='badge bg-danger text-dark'>{task.level}</span></h6>);
            default:
                break;
        }
    }

    return (
        <tr className='fw-normal'>
            <th className='text-white'>{task.name}</th>
            <td className='text-white'>{task.description}</td>
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