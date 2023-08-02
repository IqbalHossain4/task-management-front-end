import React from "react";
import { Outlet } from "react-router-dom";

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
                <button className=" border-0  w-50 py-1  mb-3 rounded bg-black text-bg-danger ">
                  Add New
                </button>
              </li>
              <li>
                <button className=" border-0  w-50 py-1 rounded bg-info text-bg-danger">
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
