import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Call from "../pages/CallTotem";
import CallVideos from "../pages/CallVideos";
import Video from "../pages/Video";
import VideoL from "../pages/VideoL";
import PainelClerk from "../pages/Painel/Clerk";
import VideoCallClerk from "../pages/Painel/Clerk/VideoCallClerk/";
import PainelInterpreter from "../pages/Painel/Interpreter";
import ReportCallVideo from "../components/ReportCallVideo";

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
        <Route path="/pclerk" element={<PainelClerk />} />

        <Route path="/vcallclerk" element={<VideoCallClerk />} />
        <Route path="/report-video-call" element={<ReportCallVideo />} />

        <Route path="/pinterpreter" element={<PainelInterpreter />} />
        {/* Case don't not works */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
