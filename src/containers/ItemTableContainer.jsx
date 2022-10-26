import { AiOutlinePlus } from "react-icons/ai";
// components
import ItemForm from "../components/ItemForm";
import ItemTable from "../components/ItemTable";

const ItemTableContainer = () => {

  return (
    <section id="tasks" className="d-flex justify-content-center section-container w-100">
      <div className="col-lg-8 col-12 mt-1">
        <div className="card">
          <div className="card-header pt-5 d-flex justify-content-between align-items-end">
            <h5 className="text-gray m-0">Your tasks:</h5>
            <button className="btn btn-primary" style={{ width: "4rem" }}><AiOutlinePlus /></button>
          </div>
          <div className="card-body" style={{ height: "16.5rem" }}>
            <ItemTable />
          </div>
          <div className="card-footer d-flex flex-column align-items-center">
            <ItemForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemTableContainer;