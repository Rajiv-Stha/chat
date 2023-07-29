import React, { useEffect, useRef } from "react";
import "./messageGround.css";
import MessageText from "../messageText/MessageText";

const MessageGround = ({ messageData }) => {
  const scrollRef = useRef();
  // console.log(scrollRef.current.getBoundingClientRect().height);
  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messageData]);
  return (
    <div ref={scrollRef} className="message_ground">
      {messageData.map((item) => {
        return <MessageText item={item} />;
      })}
    </div>
  );
};

export default MessageGround;
