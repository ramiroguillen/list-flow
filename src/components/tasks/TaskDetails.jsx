import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFirestore from '../../hooks/useFirestore';

const TaskDetails = () => {

    const { id } = useParams();

    const { getTaskById, task } = useFirestore();

    useEffect(() => {
        getTaskById(id);
    }, []);

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
        <div id="tasks" className='d-flex justify-content-center' style={{ height: '80%', width: '100%', backgroundColor: '#1e1e1e' }}>
            <div className='col-lg-8 col-12 mt-1'>
                <div className='card tasks-card' style={{ borderColor: 'black', height: '98%' }}>
                    <div className='card-header pt-5 d-flex align-items-center' style={{ height: '15%', backgroundColor: '#2d2d30' }}>
                        <h4 className='text-white me-3'>{task.name}</h4>
                        <h5>{taskLevelBadge()}</h5>
                    </div>
                    <div className='card-body px-3 overflow-auto' data-mdb-perfect-scrollbar='true' style={{ padding: '0 0.5rem', backgroundColor: '#252526' }}>
                        <p className="text-white">{task.description}</p>
                    </div>
                    <div className='card-footer' style={{ backgroundColor: '#2d2d30', height: '40%' }}>
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;