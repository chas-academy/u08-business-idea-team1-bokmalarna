import React from "react";
import "../../App.css";
import { format } from "timeago.js";

export const Message = ({ message, own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <p className="messageName">Jane Doe:</p>
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      </div>
    </>
  );
};
