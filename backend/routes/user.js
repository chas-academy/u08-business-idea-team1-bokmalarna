const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

router.use(cookieParser());
router.use(express.json());

//Authenticate
const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, "YOUR_SECRET_KEY");
    req.userId = data.id;
    req.username = data.username;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

//@desc Authenticate A User
//@routes POST /login
//@access Public
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username, password });

  console.log("user", user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      "YOUR_SECRET_KEY"
    );

    console.log("token", token);

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌" });
  } else {
    res.json({ message: "sorry, could not login" });
  }
});

//register

//logout

module.exports = router;
