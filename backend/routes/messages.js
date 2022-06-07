const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// Add message
router.post("/", async (req, res) => {
  const newMsg = new Message(req.body);

  try {
    const savedMsg = await newMsg.save();
    res.status(200).json(savedMsg);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get messages

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
