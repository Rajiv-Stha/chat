import React, { useEffect, useRef, useState } from "react";
import "./messageGround.css";
import MessageText from "../messageText/MessageText";
import { getMsgfromLS } from "../../utils/Method";

const MessageGround = ({ messageARr }) => {
  const scrollRef = useRef();
  console.log(scrollRef.current);
  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messageARr]);
  return (
    <div ref={scrollRef} className="message_ground">
      {messageARr.map((item) => {
        return <MessageText item={item} />;
      })}
    </div>
  );
};

export default MessageGround;
