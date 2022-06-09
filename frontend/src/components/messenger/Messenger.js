import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import "../../App.css";
import { ChatOnline } from "./ChatOnline";
import { Conversation } from "./Conversation";
import { Message } from "./Message";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

export const Messenger = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("access_token");
  const [user, setUser] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef(io("ws://localhost:8900"));
  const scrollRef = useRef();

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

  // Check that a user is signed in otherwise they are redirected to homepage
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      checkUser();
    }
  }, []);

  // Socket connection and chat initiation
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  // Messages only displays in relevant chat
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // Check IDs to fetch correct chat-data
  useEffect(() => {
    if (user && user.id) {
      socket.current.emit("addUser", user.id);
    }
  }, [user]);

  // Get conversatins as they are selected
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "conversations/" + user.id
        );
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user.id]);

  // Get messages as they update
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find((member) => member !== user.id);

    socket.current.emit("sendMessage", {
      senderId: user.id,
      receiverId: receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "messages/",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // When messages change scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for a user" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user.id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Write a message.."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConvoText">
                Open a conversation to start chatting
              </span>
            )}
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
