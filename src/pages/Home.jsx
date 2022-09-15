// hooks
import useAuth from '../hooks/useAuth';
// components
import TasksContainer from '../components/TasksContainer';
import Welcome from '../components/Welcome';

const Home = () => {

    const { user } = useAuth();

    return (
        <>
            {
                !user ?
                    <Welcome />
                    :
                    <TasksContainer />
            }
        </>
    );
}

export default Home;