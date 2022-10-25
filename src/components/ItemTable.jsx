import { useEffect } from "react";
// hooks
import useFirestore from "../hooks/useFirestore";
// components
import Item from "./Item";

const ItemTable = () => {

  const { getData, loading, tasks } = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table" >
      <thead>
        <tr>
          <th scope="col" className="text-white">Task</th>
          <th scope="col" className="text-white">Description</th>
          <th scope="col" className="text-white">Priority</th>
          <th scope="col" className="text-white">Completed</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          loading ?
            <tr>
              <th scope="5" className="text-gray">Retrieving tasks...</th>
            </tr>
            :
            tasks.length > 0 ?
              tasks.map((task) => <Item item={task} key={task.id} />)
              :
              <tr>
                <th scope="5" className="text-gray">There are no tasks to show.</th>
              </tr>
        }
      </tbody>
    </table>
  );
}

export default ItemTable;