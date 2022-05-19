const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const User = require("../models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

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
    req.email = data.email;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

//@desc Login A User
//@routes POST /user/login
//@access Public
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });

  console.log("user", user);

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
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
        .json({
          message: "Logged in successfully 😊 👌",
          token: token,
        });
    } else if (!passwordMatch) {
      res.json({ message: "sorry, could not login" });
    }
  } else {
    res.json({ message: "sorry, could not login" });
  }
});

//register
router.post("/register", async (req, res) => {
  const user = new User(req.body);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user.save().then(() => {
    res.status(200).json({ message: "New user has been created! 👏" });
  });
});

//@desc Logout A User
//@routes Get /user/logout
//@access Public
router.get("/logout", authorization, (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
});

//@desc Delete A User
//@routes Get /user/:id
//@access Public
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No user with id: ${id}` });

  await User.findByIdAndRemove(id);

  return res.json({ message: "User has been deleted successfully" });
});

module.exports = router;
