import { createContext, useState } from "react";
import { db } from "../services/firebase";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import useAuth from "../hooks/useAuth";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {

    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});
    const [id, setId] = useState(null);

    const tasksRef = collection(db, "tasks");

    const getData = async () => {
        setLoading(true);
        try {
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
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
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
        } catch (error) {
            alert(error);
        }
    }

    const decompleteTask = async (id) => {
        try {
            await updateDoc(doc(tasksRef, id), { completed: false });
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
        } catch (error) {
            alert(error);
        }
    }

    const editTask = async (id, obj) => {
        try {
            await updateDoc(doc(tasksRef, id), { name: obj.name, description: obj.description, level: obj.level });
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
        } catch (error) {
            alert(error);
        }
    }

    const addTask = async (task) => {
        try {
            await addDoc(tasksRef, task);
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
        } catch (error) {
            alert(error);
        }
    }

    const removeTask = async (id) => {
        try {
            await deleteDoc(doc(db, "tasks", id));
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            let userItems = result.filter(task => task.user === user.email);
            setTasks(userItems);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <TasksContext.Provider
            value={{ getData, loading, tasks, getTaskById, task, completeTask, decompleteTask, editTask, addTask, removeTask, setTask, editing, setEditing, id, setId }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;