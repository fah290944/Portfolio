import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./page/Home";
import About from "./page/About";


export default function App() {

return (

  <Router>

   <Navbar />

   <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/AboutMe" element={<About />} />

   </Routes>

  </Router>

);

}