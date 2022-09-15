// hooks
import useFirestore from '../hooks/useFirestore';
// icons
import { BsToggleOff, BsToggleOn, BsTrash } from 'react-icons/bs';

const TaskComponent = ({ task }) => {

    const { completeTask, decompleteTask, removeTask } = useFirestore();

    // returns a badge depending on task's priority
    function taskLevelBadge() {
        switch (task.level) {
            case 'normal':
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case 'urgent':
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case 'blocking':
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
            default:
                break;
        }
    }

    // returns an icon depending on task's completion level
    function taskIcon() {
        if (task.completed) {
            return (<BsToggleOn onClick={() => completeTask(task.id)} style={{ color: '#198754' }} />);
        } else {
            return (<BsToggleOff onClick={() => decompleteTask(task.id)} />);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>{task.name}</th>
            <td>{task.description}</td>
            <td>{taskLevelBadge()}</td>
            <td>{taskIcon()}</td>
            <td><BsTrash onClick={() => removeTask(task.id)} style={{ color: '#dc3545' }} /></td>
        </tr>
    );
}

export default TaskComponent;