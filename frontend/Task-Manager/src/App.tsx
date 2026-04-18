import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import PrivateRoutes from "./routes/PrivateRoutes";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTasks from "./pages/Admin/CreateTasks";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        {/* Admin Routes */}
        <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/tasks" element={<ManageTasks />}></Route>
          <Route path="/admin/create-tasks" element={<CreateTasks />}></Route>
          <Route path="/admin/users" element={<ManageUsers />}></Route>
        </Route>

        {/* User Routes */}
        <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/my-tasks" element={<MyTasks />}></Route>
          <Route path="/user/task-details/:id" element={<ViewTaskDetails />}></Route>
        </Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
