import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Timeline from "./Timeline";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Timeline></Timeline>}></Route>
      <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>

      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
      <Route path="/Profile" element={<Profile></Profile>}></Route>
    </Routes>
  );
};

export default AllRoutes;
