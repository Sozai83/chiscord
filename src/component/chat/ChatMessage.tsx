import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

type Props = {};

const ChatMessage = (props: Props) => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Chicord
          <span className="messageTimestamp">Message timestamp</span>
        </h4>
        <p>Message</p>
      </div>
    </div>
  );
};

export default ChatMessage;
