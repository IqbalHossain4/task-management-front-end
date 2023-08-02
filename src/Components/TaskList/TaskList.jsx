import React from "react";
import { Link } from "react-router-dom";
import useTask from "../../Hooks/useTask";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";
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
  //Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/taskDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Task has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      {storeTask.length !== 0 ? (
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
                    className={`makePointer rounded text-capitalize  ${
                      task.status == "incomplete"
                        ? "text-bg-danger "
                        : "text-bg-success"
                    }`}
                  >
                    {task.status}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="makePointer rounded text-bg-danger "
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div>
          <h5>
            There are no Task Kindly{" "}
            <Link to="/addTask" className="text-info">
              Add New Task
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
};

export default TaskList;
