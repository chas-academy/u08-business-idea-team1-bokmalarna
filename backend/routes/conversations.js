const express = require("express");
const router = express.Router();
const Conversation = require("../models/conversation");

// New conversation
router.post("/", async (req, res) => {
  const newConvo = new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });

  try {
    const savedConvo = await newConvo.save();
    res.status(200).json(savedConvo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a users conversation
router.get("/:userId", async (req, res) => {
  try {
    const convo = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(convo);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
