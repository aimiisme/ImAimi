import React from "react";
import SideNavbar from "./components/SideNavbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <div className="galaxy-bg"></div>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </div>
      <SideNavbar></SideNavbar>
    </div>
  );
}

export default App;
