import React from "react";
import SideNavbar from "./components/SideNavbar";
import Intro from "./components/Intro";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
      </div>
      <SideNavbar></SideNavbar>
    </div>
  );
}

export default App;
