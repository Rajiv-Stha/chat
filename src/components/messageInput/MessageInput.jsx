import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { BsMic } from "react-icons/bs";
import "./messageInput.css";

const MessageInput = ({ setMessageData }) => {
  const [messageInput, setMessageInput] = useState("");
  const loggedInUser = {
    id: "#dsjgh",
    userName: "Rajiv",
    profileImg:
      "https://images.pexels.com/photos/15637510/pexels-photo-15637510/free-photo-of-illuminated-face-of-a-smiling-woman-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };
  const handleInput = (event) => {
    setMessageInput(event.target.value);
  };
  const onKeyDown = (event) => {
    let newMessage = {
      id: loggedInUser.id + Date.now(),
      text: messageInput,
      type: "text",
      img: "",
      sender: loggedInUser,
    };
    if (event.key === "Enter") {
      setMessageData((prev) => {
        return [...prev, newMessage];
      });
      setMessageInput("");
    }
  };
  // message ko state update
  return (
    <div className="messsageInput">
      <RiAttachment2 className="input_icon" />
      <input
        type="text"
        placeholder="Your message"
        onChange={handleInput}
        onKeyDown={onKeyDown}
        value={messageInput}
      />
      <BsMic className="input_icon" />
    </div>
  );
};

export default MessageInput;
