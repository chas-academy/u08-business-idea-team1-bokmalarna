const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 50,
    },
    author: {
      type: String,
      required: true,
      max: 50,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 150,
    },
    genre: {
      type: String,
      required: true,
    },
    kondition: {
      type: String,
      required: true,
    },
    released: {
      type: Number,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
    borrower: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);