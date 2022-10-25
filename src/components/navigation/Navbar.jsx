import { Link } from "react-router-dom";
import { BsFillCalendarEventFill, BsList } from "react-icons/bs";
// hooks
import useAuth from "../../hooks/useAuth";
// icons
import { BsListCheck } from "react-icons/bs"

const Navbar = () => {

    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-2">
            <div className="container-fluid mx-3">
                <Link className="navbar-brand text-white brand" to="/list-flow">List Flow <BsListCheck /></Link>
                {
                    user
                        ? <>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link link-gray" to='/list-flow/agenda'>
                                                    Agenda
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link link-gray" to='/list-flow/tasks'>
                                                    Tasks
                                                </Link>
                                            </li>
                                        </ul>
                                        <button className="btn btn-info" onClick={logout} style={{ width: "6rem" }}>Sign Out</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        : <></>
                }
            </div>
        </nav>
    );
}

export default Navbar;
