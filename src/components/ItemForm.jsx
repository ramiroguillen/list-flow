import { useState } from "react";
// hooks
import useFirestore from "../hooks/useFirestore";
import useAuth from "../hooks/useAuth";

const ItemForm = () => {

    const { addTask, editing, setEditing, id, editTask } = useFirestore();
    const { user } = useAuth();

    const initialValues = {
        name: "",
        description: "",
        completed: false,
        level: "1",
        user: user.email
    }

    const [task, setTask] = useState(initialValues);

    const handleChange = ({ target: { name, value } }) => {
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask(task);
        if (editing) {
            editTask(id, task)
        } else if (!editing) {
            addTask(task);
        }
        setEditing(false);
        e.target.reset();
    }

    return (
        <form className="d-flex flex-column mt-3" onSubmit={handleSubmit} >

            <h5 className="text-white">{editing ? "Edit task:" : "New task:"}</h5>

            <input onChange={handleChange}
                name="name"
                type="text"
                className="form-control"
                required
                placeholder="Task Name" 
            />

            <input
                onChange={handleChange}
                name="description"
                type="text"
                className="form-control mt-1"
                required
                placeholder="Task Description"
            />

            <label htmlFor="level" className="m-1 mt-3 text-gray">Priority Level:</label>
            <select
                onChange={handleChange}
                name="level"
                className="form-select">
                <option value="1">Normal</option>
                <option value="2">Urgent</option>
                <option value="3">Blocking</option>
            </select>

            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn mt-3 btn-primary"
                    style={{ width: "4rem" }}
                >
                    {editing ? "EDIT" : "ADD"}
                </button>
            </div>
        </form>
    );
}

export default ItemForm;