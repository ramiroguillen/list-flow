import { useState } from 'react';
import db from '../services/firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const useFirestore = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);

    const usersRef = collection(db, 'users');
    const tasksRef = collection(db, 'tasks');

    const getData = async () => {
        setLoading(true);
        try {
            const usersCollection = await getDocs(usersRef);
            const usersResult = usersCollection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setUsers(usersResult);
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

    return {
        loading, users, tasks, getData, completeTask, decompleteTask, addTask, removeTask
    }
}

export default useFirestore;