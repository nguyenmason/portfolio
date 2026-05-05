import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Project from './pages/Project.jsx';
import { BrowserRouter, Route, Routes } from "react-router";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects/:id" element={<Project />} />
        </Routes>
    </BrowserRouter>
);