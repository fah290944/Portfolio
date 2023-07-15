import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";


export default function App() {

return (

  <Router>

   <div>

   <Navbar />

   <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Project" element={<Project />} />
       <Route path="/Contact" element={<Contact />} />


   </Routes>

   </div>

  </Router>

);

}