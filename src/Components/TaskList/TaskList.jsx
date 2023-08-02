import React from "react";
import useTask from "../../Hooks/useTask";
import Swal from "sweetalert2";

const TaskList = () => {
  const [storeTask] = useTask();
  //   handle Status and Update Status
  const handleStatus = (id) => {
    fetch(`http://localhost:5000/taskStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "successfully Updated Your Task",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
              <td>
                <button
                  onClick={() => handleStatus(task._id)}
                  className={`makePointer rounded  ${
                    task.status == "incomplete"
                      ? "text-bg-danger "
                      : "text-bg-success"
                  }`}
                >
                  {task.status}
                </button>
              </td>
              <td>{task.status}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TaskList;
