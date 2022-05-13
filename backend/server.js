// Server side file, import all Routes(Views) and execute them here.
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8081;

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World 🤘" });
});

//Function to start the server
const startServer = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server up and running at: http://localhost:${port}`);
      console.log(PORT, process.env.DATABASE_URL);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

//server connection starts here
mongoose.connect("mongodb://localhost/BookOwl").then(() => {
  startServer(PORT);
});
