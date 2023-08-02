import React, { useEffect, useState } from "react";

const useTask = () => {
  const [storeTask, setStoreTask] = useState([]);
  // load Task
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setStoreTask(data));
  }, [storeTask]);
  return [storeTask];
};

export default useTask;
