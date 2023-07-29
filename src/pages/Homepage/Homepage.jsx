import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Homepage.css";
import Message from "../../components/message/Message";

const Homepage = () => {
  return (
    <div className="homepage_container">
      <Sidebar />
      <Message />
    </div>
  );
};

export default Homepage;
