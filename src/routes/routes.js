import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;