import React, { createContext, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {

    const { loading, users, tasks, getData, completeTask, decompleteTask, addTask, removeTask } = useFirestore();

    useEffect(() => {
        getData();
    }, []);

    const handleAddTask = (task) => {
        addTask(task);
    }

    const handleCompleteTask = (id) => {
        completeTask(id);
    }

    const handleDecompleteTask = (id) => {
        decompleteTask(id);
    }

    const handleRemoveTask = (id) => {
        removeTask(id);
    }

    return (
        <TasksContext.Provider
            value={{ loading, users, tasks, handleCompleteTask, handleDecompleteTask, handleAddTask, handleRemoveTask }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;