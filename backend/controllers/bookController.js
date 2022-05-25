const multer = require("multer");
const Book = require("../models/book");
const uploadImg = multer({ storage: storage }).single("image");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const newBook = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    image: req.file.path, //update this
    description: req.body.description,
    genre: req.body.genre,
    condition: req.body.condition,
    released: req.body.released,
    owner: req.body.owner,
    borrower: req.body.borrower,
  });
  newBook.save().then(res.json("New book is created."));
};

/*   app.post("/newBook", uploadImg, newBook); */
