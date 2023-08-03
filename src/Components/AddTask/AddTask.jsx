import React, { useState } from "react";
import Swal from "sweetalert2";
const AddTask = () => {
  const [titleError, setTitleError] = useState(null);
  const [descError, setDescError] = useState(null);
  //handle Add task
  const handleAddTask = (e) => {
    e.preventDefault();

    const taskTitle = e.target.title.value;
    const taskDescription = e.target.description.value;
    //Error Handalling
    setTitleError("");
    setDescError("");
    if (taskTitle === "") {
      setTitleError("Your Title Field is Empty");
      return;
    } else if (descError === "") {
      setDescError("Your Description Field is Empty");
      return;
    }

    //post Task
    const task = {
      title: taskTitle,
      description: taskDescription,
      status: "incomplete",
    };
    fetch("https://task-management-back-end-kohl.vercel.app/addTask", {
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
    <div className="">
      <h4 className="text-bg-dark   py-1">Add New Task</h4>
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
        <p className="text-danger">{titleError}</p>
        <div className="text-start  d-flex flex-column mb-3">
          <label className="fs-6">Description</label>
          <textarea
            name="description"
            className="w-100 ps-2"
            rows="4"
            placeholder="Write Description"
          ></textarea>
        </div>
        <p className="text-danger">{descError}</p>
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
