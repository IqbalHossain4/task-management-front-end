import React from "react";
import Swal from "sweetalert2";
const AddTask = () => {
  //handle Add task
  const handleAddTask = (e) => {
    e.preventDefault();
    const taskTitle = e.target.title.value;
    const taskDescription = e.target.description.value;
    const task = {
      title: taskTitle,
      description: taskDescription,
      status: "incomplete",
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
    <div className="w-75 mx-auto ">
      <form onSubmit={handleAddTask}>
        <div className="text-start  d-flex flex-column mb-3">
          <label className="fs-6">Title</label>
          <input
            type="text"
            className="ps-2  "
            placeholder="Title"
            name="title"
          />
        </div>
        <div className="text-start  d-flex flex-column mb-3">
          <label className="fs-6">Description</label>
          <textarea
            name="description"
            className="w-100 ps-2"
            rows="4"
            placeholder="Write Description"
          ></textarea>
        </div>
        <input
          type="submit"
          className="btn btn-info fw-semibold"
          value={"Add Task"}
        />
      </form>
    </div>
  );
};

export default AddTask;
