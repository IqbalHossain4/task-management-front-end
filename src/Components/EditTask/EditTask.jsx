import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditTask = () => {
  const taskData = useLoaderData();
  //   handle Edit Task
  const handleEditTask = (e) => {
    e.preventDefault();
    const taskTitle = e.target.title.value;
    const taskDescription = e.target.description.value;
    const task = {
      title: taskTitle,
      description: taskDescription,
    };
    fetch(
      `https://task-management-back-end-kohl.vercel.app/editTask/${taskData._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added Task",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h4 className="text-bg-dark   py-1">Edit Your Task</h4>
      <form onSubmit={handleEditTask}>
        <div className="text-start  d-flex flex-column mb-3">
          <label className="fs-6">Title</label>
          <input
            type="text"
            className="ps-2  "
            placeholder="Title"
            name="title"
            defaultValue={taskData.title}
          />
        </div>

        <div className="text-start  d-flex flex-column mb-3">
          <label className="fs-6">Description</label>
          <textarea
            rows="4"
            name="description"
            className="w-100 ps-2"
            placeholder="Write Description"
            defaultValue={taskData.description}
          ></textarea>
        </div>

        <input
          type="submit"
          className="btn btn-info fw-semibold"
          value={"Update Task"}
        />
      </form>
    </div>
  );
};

export default EditTask;
