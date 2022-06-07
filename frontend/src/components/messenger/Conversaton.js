import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

export const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const otherUsersId = conversation.member.find((m) => m !== currentUser.id);

    const getUser = async () => {
      const res = await axios("/user");
    };
  }, []);
  return (
    <>
      <div className="conversation">
        <p className="conversationName">Jane Doe</p>
      </div>
    </>
  );
};
