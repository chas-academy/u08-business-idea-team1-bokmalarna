const express = require('express')
const { findById } = require('../models/book')
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

// Get single book
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id)
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({message: "Could not find book"})
  }
})

// Update Book
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const options = {new: true};
    const book = await Book.findByIdAndUpdate(id, update, options);
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({message: "Could not update book"})
  }
})

// Delete Book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    book.delete()
    res.status(200).json({message: "Book sucessfully deleted"})
  } catch (error) {
    res.status(500).json({mesage: "Could not delete Book"})
  }
})

module.exports = router;