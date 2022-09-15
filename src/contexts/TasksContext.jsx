import { createContext, useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    const tasksRef = collection(db, 'tasks');

    const getData = async () => {
        setLoading(true);
        try {
            const tasksCollection = await getDocs(tasksRef);
            const tasksResult = tasksCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setTasks(tasksResult);
            setLoading(false);
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    };

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

    useEffect(() => {
        getData();
    }, []);

    return (
        <TasksContext.Provider
            value={{ loading, tasks, completeTask, decompleteTask, addTask, removeTask }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;