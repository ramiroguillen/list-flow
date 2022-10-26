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
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({});

    const tasksRef = collection(db, "tasks");
    const eventsRef = collection(db, "events");

    const getData = async (type) => {
        setLoading(true);
        switch (type) {
            case "tasks":
                try {
                    const collection = await getDocs(tasksRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setTasks(userDocs);
                    setLoading(false);
                } catch (error) {
                    alert(error);
                    setLoading(false);
                }
                return;
            case "events":
                try {
                    const collection = await getDocs(eventsRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setEvents(userDocs);
                    setLoading(false);
                } catch (error) {
                    alert(error);
                    setLoading(false);
                }
                return;
            default:
                setLoading(false);
                break;
        }
    }

    const getById = (type, id) => {
        setLoading(true);
        switch (type) {
            case "tasks":
                try {
                    const e = tasks.find(e => e.id === id);
                    setTask(e);
                    setLoading(false);
                } catch (error) {
                    alert(error);
                    setLoading(false);
                }
                return;
            case "events":
                try {
                    const e = events.find(e => e.id === id);
                    setEvent(e);
                    setLoading(false);
                } catch (error) {
                    alert(error);
                    setLoading(false);
                }
                return;
            default:
                setLoading(false);
                break;
        }
    }

    const complete = async (id) => {
        try {
            await updateDoc(doc(tasksRef, id), { completed: true });
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            const userDocs = result.filter(doc => doc.user === user.email);
            setTasks(userDocs);
        } catch (error) {
            alert(error);
        }
    }

    const decomplete = async (id) => {
        try {
            await updateDoc(doc(tasksRef, id), { completed: false });
            const collection = await getDocs(tasksRef);
            const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            const userDocs = result.filter(doc => doc.user === user.email);
            setTasks(userDocs);
        } catch (error) {
            alert(error);
        }
    }

    const updateById = async (type, id, obj) => {
        setLoading(true);
        switch (type) {
            case "tasks":
                try {
                    await updateDoc(doc(tasksRef, id), { name: obj.name, description: obj.description, level: obj.level });
                    const collection = await getDocs(tasksRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setTasks(userDocs);
                } catch (error) {
                    alert(error);
                }
                return;
            case "events":
                try {
                    await updateDoc(doc(eventsRef, id), { title: obj.title, description: obj.description, start: obj.start, end: obj.end });
                    const collection = await getDocs(eventsRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setEvents(userDocs);
                } catch (error) {
                    alert(error);
                }
                return;
            default:
                setLoading(false);
                break;
        }

    }

    const addNew = async (type, obj) => {
        switch (type) {
            case "tasks":
                try {
                    await addDoc(tasksRef, obj);
                    const collection = await getDocs(tasksRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setTasks(userDocs);
                } catch (error) {
                    alert(error);
                }
                break;
            case "events":
                try {
                    await addDoc(eventsRef, obj);
                    const collection = await getDocs(eventsRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setEvents(userDocs);
                } catch (error) {
                    alert(error);
                }
                return;
            default:
                break;
        }

    }

    const deleteById = async (type, id) => {
        switch (type) {
            case "tasks":
                try {
                    await deleteDoc(doc(db, "tasks", id));
                    const collection = await getDocs(tasksRef);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setTasks(userDocs);
                } catch (error) {
                    alert(error);
                }
                return;
            case "events":
                try {
                    await deleteDoc(doc(db, "events", id));
                    const collection = await getDocs(events);
                    const result = collection.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    const userDocs = result.filter(doc => doc.user === user.email);
                    setEvents(userDocs);
                } catch (error) {
                    alert(error);
                }
                return;
            default:
                break;
        }

    }

    return (
        <TasksContext.Provider value={{
            getData,
            loading,
            tasks,
            events,
            getById,
            task,
            event,
            complete,
            decomplete,
            updateById,
            addNew,
            deleteById,
            setTask,
            editing,
            setEditing,
            id,
            setId
        }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;