import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewTask = () => {
  const viewTask = useLoaderData();

  return (
    <div>
      <h4 className="text-bg-dark   py-1">Task Details</h4>
      <div className="bg-dark-subtle text-start p-4">
        <h4>{viewTask.title}</h4>
        <hr />
        <p className="text-wrap">{viewTask.description}</p>
      </div>
    </div>
  );
};

export default ViewTask;
