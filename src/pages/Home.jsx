import { Link, Outlet } from "react-router-dom";
import useTask from "../Hooks/useTask";

const Home = () => {
  const [storeTask] = useTask();
  return (
    <div className="">
      <div className="container text-center">
        <div className="row">
          <nav className="bg-dark  text-bg-danger text-info py-2 my-5 fs-2 fw-semibold ">
            Task ManageMent System
          </nav>
          {/* Task sidebar */}
          <div className="col col-lg-2 h-100  border-end border-info">
            <ul>
              <li>
                <Link to="/">
                  <button className="w-75 py-1  mb-3 rounded  hoverButton1">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/addTask">
                  <button className="w-75 py-1  mb-3 rounded  hoverButton1">
                    Add New
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/taskList">
                  <button
                    type="button"
                    className="w-75 py-1 rounded  hoverButton1 position-relative"
                  >
                    Task List
                    {storeTask.length >= 1 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                        {storeTask.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </button>
                </Link>
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
