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

   <Navbar />

   <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/AboutMe" element={<About />} />
       <Route path="/Project" element={<Project />} />
       <Route path="/Contact" element={<Contact />} />

   </Routes>

  </Router>

);

}