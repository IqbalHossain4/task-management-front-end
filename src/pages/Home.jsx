import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="container text-center">
        <div className="row">
          <nav className="bg-dark  text-bg-danger py-2 my-5 fs-2">
            Task ManageMent System
          </nav>
          {/* Task sidebar */}
          <div className="col col-lg-2 h-100  border-end border-info">
            <ul>
              <li>
                <Link to="/addTask">
                  <button className="  w-75 py-1  mb-3 rounded  hoverButton1 ">
                    Add New
                  </button>
                </Link>
              </li>
              <li>
                <button className="   w-75 py-1 rounded  hoverButton">
                  Task List
                </button>
              </li>
            </ul>
          </div>
          {/* task Main Contant */}
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
