import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../../App.css";
import { ChatOnline } from "./ChatOnline";
import { Conversation } from "./Conversaton";
import { Message } from "./Message";
import { useNavigate } from "react-router-dom";

export const Messenger = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("access_token");
  const [user, setUser] = useState({});
  const [conversations, setConversations] = useState([]);

  const checkUser = async () => {
    //User sends its access_token in headers to BE to be decoded.
    await axios
      .get(process.env.REACT_APP_API_URL + "user/protected", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        if (res.data.user) {
          //Stores user info into the state.
          setUser(res.data.user);
        }
      });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      checkUser();
    }
  }, [user.id]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "conversations/" + user.id
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user.id]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for a user" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write a message.."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};
