import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="chat">
      {/* Chat header */}
      <ChatHeader />
      {/* Chat message */}
      <div className="chatMessage"></div>
      {/* Chat input */}
      <div className="chatInput"></div>
    </div>
  );
};

export default Chat;
