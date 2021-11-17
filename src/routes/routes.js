import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Call from '../pages/Call';
import Video from '../pages/Video';
import VideoL from '../pages/VideoL';


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="" element={<Login/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/call" element={<Call/>} />
                <Route path="/video" element={<Video/>} />
                <Route path="/videol" element={<VideoL/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;