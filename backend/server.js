// Server side file, import all Routes(Views) and execute them here.
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8081;
const userRouter = require("./routes/user");

const app = express();

app.use("/user", userRouter);

app.get("/", (req, res) => {
  return res.json({ message: "Hello World 🤘" });
});

//Function to start the server
const startServer = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

//server connection starts here
mongoose.connect(process.env.DATABASE_URL).then(() => {
  startServer(PORT);
});
