import React from "react";
import useTask from "../../Hooks/useTask";

const TaskList = () => {
  const [storeTask] = useTask();
  //   handle Status and Update Status
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {storeTask.map((task, index) => (
          <tbody key={task._id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.description.slice(0, 25)}</td>
              <td onClick={() => handleStatus(task._id)}>{task.status}</td>
              <td>{task.status}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TaskList;
