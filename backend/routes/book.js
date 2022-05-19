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

// GET books
router.get("/", async (req, res) => {
  try {
    const book = await Book.find()
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({message: "Could not get books"})
  }
})

router.put("/:id", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

module.exports = router;