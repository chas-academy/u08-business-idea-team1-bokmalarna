const express = require("express");
const router = express.Router();
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

router.use(cookieParser());
router.use(express.json());

//Login

//register

//logout
