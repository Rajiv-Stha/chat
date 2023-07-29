import React, { useState } from "react";
import MessageHeader from "../messsageHeader/MessageHeader";
import "./Message.css";
import MessageInput from "../messageInput/MessageInput";
import MessageGround from "../messageGround/MessageGround";
import { messages } from "../../utils/Data";

const Message = () => {
  const [messageData, setMessageData] = useState(messages);
  console.log(messageData);
  return (
    <div className="message_container">
      <MessageHeader />
      <MessageGround messageData={messageData} />
      <MessageInput setMessageData={setMessageData} />
    </div>
  );
};

export default Message;
