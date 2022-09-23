import { createContext, useState } from 'react';
import { db } from '../services/firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import useAuth from '../hooks/useAuth';

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {

    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});

    const tasksRef = collection(db, 'tasks');

    const getData = async () => {
        setLoading(true);
        try {
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult.filter(task => task.user === user.email));
            setLoading(false);
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    };

    const getTaskById = (id) => {
        setLoading(true);
        try {
            const task = tasks.find(task => task.id === id);
            setTask(task);
            setLoading(false);
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    }

    const completeTask = async (id) => {
        try {
            await updateDoc(doc(tasksRef, id), { completed: true });
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult);
        } catch (error) {
            alert(error);
        }
    }

    const decompleteTask = async (id) => {
        try {
            await updateDoc(doc(tasksRef, id), { completed: false });
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult);
        } catch (error) {
            alert(error);
        }
    }

    const addTask = async (task) => {
        try {
            await addDoc(tasksRef, task);
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult);
        } catch (error) {
            alert(error);
        }
    }

    const removeTask = async (id) => {
        try {
            await deleteDoc(doc(db, 'tasks', id));
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <TasksContext.Provider
            value={{ getData, loading, tasks, getTaskById, task, completeTask, decompleteTask, addTask, removeTask }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;