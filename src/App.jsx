import React, { Suspense } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./HomePage/HomePage";
const Layout = React.lazy(() => import("./Project/Layout/Layout"));
const Tasks = React.lazy(() => import("./Project/Components/Tasks/Tasks"));
const ShowDetail = React.lazy(
  () => "./Project/Container/showDetail/showDetail"
);
import Calander from "./Project/Calander/Calander";
import Files from "./Project/Files/Files";
import Activity from "./Project/Activity/Activity.jsx";
import DashBoard from "./Project/Dashboard/Dashboard";
import Login from "./Project/LogIn/login.jsx";
import SignUP from "./Project/SignUp/SignUp";
import Spinner from "./Project/Components/UI/Spinner/Spinner";
import Team from "./Project/Container/Team/Team";
import MyTask from "./Project/MyTasks/MyTask";

function App() {
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  return (
    <React.Fragment>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!isLoggedin ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUP />} />
              <Route
                path="*"
                element={<h1 className="flex text-center">Page Not Found!</h1>}
              />
            </>
          ) : (
            <Route path="/dashboard/*" element={<Layout />}>
              <Route index path="" element={<DashBoard />} />
              <Route path="myTasks" element={<MyTask />} />
              <Route path="Members" element={<MyTask />} />
              <Route path="project/:id/*" element={<Outlet />}>
                <Route path="activity" element={<Activity />} />
                <Route path="calander" element={<Calander />} />
                <Route path="files" element={<Files />} />
                <Route path="" element={<Tasks />}>
                  <Route path="todo/:taskId" element={<ShowDetail />} />
                  <Route path="backlog/:taskId" element={<ShowDetail />} />
                </Route>
              </Route>
              <Route path="Team/:id" element={<Team />} />
            </Route>
          )}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
