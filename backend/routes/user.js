const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

router.use(cookieParser());
router.use(express.json());

//Authenticate

//Login

//register

//logout
