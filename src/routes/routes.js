import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Call from "../pages/CallTotem";
import CallVideos from "../pages/CallVideos";
import Video from "../pages/Video";
import VideoL from "../pages/VideoL";
import AreaInterpreter from "../pages/Interpreter";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/call" element={<Call />} />
        <Route path="/call-video" element={<CallVideos />} />
        <Route path="/video" element={<Video />} />
        <Route path="/videol" element={<VideoL />} />
        <Route path="/interpreter" element={<AreaInterpreter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
