import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";
import EditTask from "./Components/EditTask/EditTask";
import ViewTask from "./Components/ViewTask/ViewTask";
import HomePage from "./Components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
      {
        path: "taskList",
        element: <TaskList />,
      },
      {
        path: "editTask/:id",
        element: <EditTask />,
        loader: ({ params }) =>
          fetch(
            `https://task-management-back-end-kohl.vercel.app/tasks/${params.id}`
          ),
      },
      {
        path: "viewTask/:id",
        element: <ViewTask />,
        loader: ({ params }) =>
          fetch(
            `https://task-management-back-end-kohl.vercel.app/tasks/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
