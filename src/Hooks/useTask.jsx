import React, { useEffect, useState } from "react";

const useTask = () => {
  const [storeTask, setStoreTask] = useState([]);
  // load Task
  useEffect(() => {
    fetch("https://task-management-back-end-kohl.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setStoreTask(data));
  }, [storeTask]);
  return [storeTask];
};

export default useTask;
