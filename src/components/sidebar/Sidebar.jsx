import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Sidebar.css";
import Conversation from "../conversation/Conversation";
import { chats } from "../../utils/Data";
const Sidebar = () => {
  const [allChats, setAllChats] = useState(chats);

  return (
    <div className="sidebar">
      <div className="searchBar">
        <BsSearch className="searchIcon" />
        <input type="text" placeholder="search" />
      </div>
      <div className="conversation_container">
        {allChats.map((chat) => {
          return <Conversation chat={chat} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
