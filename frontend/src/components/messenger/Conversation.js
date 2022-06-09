import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

export const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const otherUsersId = conversation.members.find((m) => m !== currentUser.id);

    const getUser = async () => {
      try {
        const res = await axios(
          process.env.REACT_APP_API_URL + "user?userId=" + otherUsersId
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <>
      <div className="conversation">
        <p className="conversationName">
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </>
  );
};
