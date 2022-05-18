const express = require('express')
const router = express.Router()
const Book = require("../models/book")


// Create book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body)
    await book.save()
    res.json(book)
  } catch (error) {
    res.json({message: "Could not create book"})
  }
})

module.exports = router;