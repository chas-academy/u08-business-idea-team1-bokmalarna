const { json } = require("express");
const express = require("express");
const { findById } = require("../models/book");
const router = express.Router();
const Book = require("../models/book");
const User = require("../models/user");
const bookController = require("../controllers/bookController");
const book = require("../models/book");

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

//GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().limit(6);
    res.status(200).json({ book: books });
  } catch (error) {
    res.status(400).json({ status: error });
  }
});

// GET searched books
router.get("/:searchParam?&:location?&:genres", async (req, res) => {
  const { searchParam, location, genres } = req.params;
  const search = searchParam.split("=");
  const city = location.split("=");
  const genre = genres.split("=");

  try {
    if (search[1] != "") {
      let books;
      // Find books by title
      books = await Book.find({ title: search[1] }).populate("owner");
      // Find books by author
      if (books.length === 0) {
        books = await Book.find({ author: search[1] }).populate("owner");
      }
      // Filter books by location
      const booksByCity = books.filter((book) => book.owner.city === city[1]);
      if (booksByCity.length != 0) {
        if (genre[1] === "Genres") {
          res.status(200).json(booksByCity);
        }
        // Filter array again based on selected genre
        else if (genre[1] != "Genres") {
          const booksByGenre = booksByCity.filter(
            (book) => book.genre === genre[1]
          );
          res.status(200).json(booksByGenre);
        }
      }
      // Filter book-array from searched term based on selected genre
      else if (genre[1] != "Genres") {
        const booksByGenre = books.filter((book) => book.genre === genre[1]);
        res.status(200).json(booksByGenre);
      }
      // Return a book-array based on only searched term
      else {
        res.status(200).json(books);
      }
    }
    // Filter books on location without a title or author
    else if (search[1] === "" && city[1] != "") {
      const owners = await User.find({ city: city[1] });
      const ownerId = owners.map((owner) => owner.id);
      const booksByCity = await Book.find({ owner: ownerId });
      if (genre[1] === "Genres") {
        res.status(200).json(booksByCity);
      }
      // Filter the booksByCity-array based on a selected genre
      else if (genre[1] != "Genres") {
        const booksByGenre = booksByCity.filter(
          (book) => book.genre === genre[1]
        );
        res.status(200).json(booksByGenre);
      }
    }
    // Filter books on genre without title, author or location
    else if (search[1] === "" && city[1] === "" && genre[1] != "Genre") {
      const booksByGenre = await Book.find({ genre: genre[1] });
      res.status(200).json(booksByGenre);
    }
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
    const options = { new: true };
    const book = await Book.findByIdAndUpdate(id, req.body, options);
    res.status(200).json({
      status: "Success!",
      message: "Book updated successfully!",
      book: book,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "Failed", message: "Could not update book" });
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
