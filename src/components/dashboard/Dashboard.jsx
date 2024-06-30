import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Home from "../home/Home";
import Player from "../playercontrollaer/Player";
import "./dashboard.css";

const Dashboard = () => {
  
  return (
    <div className="dashboard-main-div">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
};

export default Dashboard;
