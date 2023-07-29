import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import "./messageHeader.css";

const MessageHeader = () => {
  return (
    <div className="message_header">
      <div className="message_detail">
        <h4 className="conversation_username">office chat</h4>
        <p className="convo_gc_info">45 members, 23 online</p>
      </div>
      <div className="icons_box">
        <CiSearch className="conversation_icon" />
        <IoIosCall className="conversation_icon" />
        <SlOptionsVertical className="conversation_icon" />
      </div>
    </div>
  );
};

export default MessageHeader;
