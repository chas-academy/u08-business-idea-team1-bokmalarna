import React, { useEffect, useState } from "react";
import "../../App.css";
import { format } from "timeago.js";
import axios from "axios";

export const Message = ({ message, own, conversation, currentUser }) => {
  const [receiver, setReceiver] = useState(null);
  const [sender, setSender] = useState(null);

  useEffect(() => {
    const sendersId = conversation.members.find((m) => m === currentUser.id);
    const otherUsersId = conversation.members.find((m) => m !== currentUser.id);

    if (sendersId && otherUsersId) {
      const getUsers = async () => {
        // Get senders user data
        try {
          const res = await axios(
            process.env.REACT_APP_API_URL + "user?userId=" + sendersId
          );
          setSender(res.data);
        } catch (error) {
          console.log(error);
        }
        // Get receivers user data
        try {
          const res = await axios(
            process.env.REACT_APP_API_URL + "user?userId=" + otherUsersId
          );
          setReceiver(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getUsers();
    }
  }, [currentUser, conversation]);

  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <p className="messageName">
            {own ? sender?.firstName : receiver?.firstName}
          </p>
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      </div>
    </>
  );
};
