import React from "react";
import "./conversation.css";
import { AiFillPushpin } from "react-icons/ai";
const Conversation = ({ chat }) => {
  return (
    <div className="conversation">
      <div className="img_wrapper_sidebar">
        <img
          src={chat.sender.profileImg}
          alt="img"
          className="conversation_img"
        />
      </div>

      <div className="conversation_info">
        <div className="conversation_main_info">
          <p className="conv_head">{chat.sender.userName}</p>
          <p className="conv_msg">hello this is rajiv fuck you</p>
        </div>
        <div className="pinned">
          <p className="ago_time">{chat.time}</p>
          <AiFillPushpin className="pin_icon" />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
