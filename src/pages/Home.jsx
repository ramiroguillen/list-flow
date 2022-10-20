// hooks
import useAuth from '../hooks/useAuth';
// components
import TasksContainer from '../containers/TasksContainer';
import Welcome from '../containers/Welcome';

const Home = () => {

    const { user } = useAuth();

    return (
        <>
            {
                user ?
                    <TasksContainer />
                    : <Welcome />
            }
        </>
    );
}

export default Home;