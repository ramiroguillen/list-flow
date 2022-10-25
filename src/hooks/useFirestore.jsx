import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

const useFirestore = () => {

    return useContext(TasksContext);
}

export default useFirestore;