import React, { useEffect, useState } from "react";
import MessageHeader from "../messsageHeader/MessageHeader";
import "./Message.css";
import MessageInput from "../messageInput/MessageInput";
import MessageGround from "../messageGround/MessageGround";
import { messages } from "../../utils/Data";
import { getMsgfromLS } from "../../utils/Method";

const Message = () => {
  // const [messageData, setMessageData] = useState(messages);
  // console.log(messageData);
  const [messageARr, setMessageARr] = useState([]);
  useEffect(() => {
    setMessageARr(getMsgfromLS());
  }, []);
  return (
    <div className="message_container">
      <MessageHeader />
      <MessageGround messageARr={messageARr} />
      <MessageInput setMessageData={setMessageARr} />
    </div>
  );
};

export default Message;
