// Server side file, import all Routes(Views) and execute them here.
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8081;
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/uploads", express.static("./uploads"));

//Function to start the server
app.get("/", (req, res) => {
  return res.json({ message: "Hello World 🤘" });
});

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
