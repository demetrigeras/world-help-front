import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx"
import Charity from "./screens/Charity.jsx";
import { React, useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charity/:id" element={<Charity />} />
      </Routes>
    </div>
  );
}

export default App;
