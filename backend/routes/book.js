const { json } = require("express");
const express = require("express");
const { findById } = require("../models/book");
const router = express.Router();
const Book = require("../models/book");
const User = require("../models/user");
const bookController = require("../controllers/bookController");

// Create book
router.post("/newBook", bookController.uploadImg, bookController.newBook);

//Get User books
router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const owner = await User.findById(id);
    const userBooks = await Book.find({ owner: owner.id });
    res.status(200).json({ message: userBooks });
  } catch (error) {
    res.status(400).json({ message: "That user has no books, try again" });
  }
});

//Get User borrowed books
router.get("/borrowed/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const owner = await User.findById(id);
    const borrowerBooks = await Book.find({ borrower: owner.id });
    res.status(200).json({ message: borrowerBooks });
  } catch (error) {
    res.status(400).json({ message: "That user has no books, try again" });
  }
});

// GET searched books
router.get("/:searchParam?&:location?", async (req, res) => {
  const { searchParam, location } = req.params;
  const search = searchParam.split("=");
  const city = location.split("=");

  try {
    const books = await Book.find({ title: search[1] });
    if (books.length > 0) {
      res.status(200).json(books);
    } else if (books.length === 0) {
      const books = await Book.find({ author: search[1] });
      res.status(200).json(books);
    }
    const book = books.map((book) => book.owner);
    console.log(book);
    const owner = book.map((id, index) => {
      return id + index;
    });
    console.log(owner);
  } catch (error) {
    res.status(500).json({ message: "Could not find any books" });
  }
});

// Get single book
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Could not find book" });
  }
});

// Update Book
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const options = { new: true };
    const book = await Book.findByIdAndUpdate(id, update, options);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Could not update book" });
  }
});

// Delete Book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.delete();
    res.status(200).json({ message: "Book sucessfully deleted" });
  } catch (error) {
    res.status(500).json({ mesage: "Could not delete Book" });
  }
});

module.exports = router;
