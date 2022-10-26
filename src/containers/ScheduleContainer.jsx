import { AiOutlinePlus } from "react-icons/ai";
import Schedule from "../components/Schedule";

const ScheduleContainer = () => {

    return (
        <section id="schedule" className="d-flex justify-content-center section-container w-100">
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