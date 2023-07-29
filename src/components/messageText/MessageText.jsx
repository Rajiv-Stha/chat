import React from "react";

import "./messageText.css";
const MessageText = ({ item }) => {
  const loggedInUser = {
    id: "#dsjgh",
    userName: "Rajiv",
    profileImg:
      "https://images.pexels.com/photos/15637510/pexels-photo-15637510/free-photo-of-illuminated-face-of-a-smiling-woman-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  return (
    <div
      className={`message_text ${
        item.sender.id === loggedInUser.id ? "myChat" : ""
      }`}
    >
      <div className="img_wrapper">
        <img src={item.sender.profileImg} alt="avatar" />
      </div>
      <div className="text_message">
        <p className="text_username">{item.sender.userName}</p>
        <p className="text_inbox">{item.text}</p>
      </div>
    </div>
  );
};

export default MessageText;
