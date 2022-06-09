const user = require("../models/user");

const dotenv = require("dotenv").config();
const io = require("socket.io")(8900, {
  cors: {
    origin: process.env.REQUEST_URL,
  },
});

let users = [];

const addUser = (userId, socketId) => {
  console.log("Users array", users);
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  /* console.log(userId); */
  console.log("Get user", users);
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("A user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    console.log("on add user", userId);
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log("Text", text);
    console.log("Sender", senderId);
    console.log("Receiver", receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
