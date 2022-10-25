import { useState, useEffect } from "react";
import {AiOutlinePlus} from "react-icons/ai";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// // import parse from "date-fns/parse";
// // import startOfWeek from "date-fns/startOfWeek";
// // import getDay from "date-fns/getDay";
// import enUS from "date-fns/locale/en-US";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
import Schedule from "../components/Schedule";

const ScheduleContainer = () => {

    const [open, setOpen] = useState(false);

    return (
        <section id="schedule" className="d-flex justify-content-center section-container">
            <div className="col-lg-8 col-12 mt-1">
                <div className="card">
                    <div className="card-header pt-5 d-flex justify-content-between align-items-end">
                        <h5 className="text-gray m-0">Your agenda:</h5>
                        <button className="btn btn-primary" style={{ width: "4rem" }}><AiOutlinePlus /></button>
                    </div>
                    <div className="card-body">
                        <Schedule />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScheduleContainer;