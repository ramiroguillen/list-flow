import { Link } from "react-router-dom";
// hooks
import useFirestore from "../hooks/useFirestore";
// icons
import { BsToggleOff, BsToggleOn, BsTrashFill, BsPencilSquare } from "react-icons/bs";

const Item = ({ item }) => {

    const { complete, decomplete, deleteById, setId, editing, setEditing } = useFirestore();

    // returns a badge depending on task"s priority
    function taskLevelBadge() {
        switch (item.level) {
            case "1":
                return (
                    <span
                        className="badge badge-success"
                        style={
                            { backgroundColor: item.completed && "var(--gray)", color: item.completed && "var(--light-gray)" }
                        }
                    >normal</span>
                );
            case "2":
                return (
                    <span
                        className="badge badge-warning"
                        style={
                            { backgroundColor: item.completed && "var(--gray)", color: item.completed && "var(--light-gray)" }
                        }
                    >urgent</span>
                );
            case "3":
                return (
                    <span
                        className="badge badge-danger"
                        style={{ backgroundColor: item.completed && "var(--gray)", color: item.completed && "var(--light-gray)" }}
                    >blocking</span>
                );
            default:
                break;
        }
    }

    function openEdit(id) {
        setEditing(!editing);
        setId(id);
    }

    return (
        <tr className="fw-normal">
            <th>
                <Link
                    to={`/todo-list/task/${item.id}`}
                    style={{
                        textDecoration: item.completed
                            ? "line-through"
                            : "none",
                        fontStyle: item.completed && "italic",
                        color: item.completed ? "var(--gray)" : "white"
                    }}>
                    {item.name}
                </Link>
            </th>
            <td className="overflow-scroll"
                style={{
                    textDecoration: item.completed && "line-through",
                    fontStyle: item.completed && "italic",
                    color: item.completed ? "var(--gray)" : "var(--light-gray)"
                }}>
                {item.description}
            </td>
            <td>{taskLevelBadge()}</td>
            <td className="text-gray">
                {
                    item.completed ?
                        <BsToggleOn
                            onClick={() => decomplete(item.id)}
                            style={{ color: "var(--primary-color)", marginLeft: "2rem" }}
                        />
                        :
                        <BsToggleOff
                            onClick={() => complete(item.id)}
                            style={{ marginLeft: "2rem" }}
                        />
                }
            </td>
            <td>
                <BsPencilSquare onClick={() => openEdit(item.id)} className="me-1 link-gray" />
                <BsTrashFill onClick={() => deleteById("tasks", item.id)} style={{ color: "#CA2E2E" }} />
            </td>
        </tr>
    );
}

export default Item;