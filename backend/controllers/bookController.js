const multer = require("multer");
const Book = require("../models/book");

// Store img to uploads folder

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

// Create new book incl. image

const newBook = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    image: req.file.path,
    description: req.body.description,
    genre: req.body.genre,
    condition: req.body.condition,
    released: req.body.released,
    owner: req.body.owner,
    borrower: req.body.borrower,
  });
  newBook.save().then(res.json("New book is created."));
};

module.exports = { newBook, uploadImg };
