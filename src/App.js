import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Nav from "./components/Nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  return (
    <>
     <Nav/>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Skill" element={<Skill />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      
    </>
  )
}
export default App;