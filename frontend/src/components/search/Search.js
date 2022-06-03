import axios from "axios";
import React, { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async (title) => {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "book/" + title
    );
    setBooks(res.data);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks(searchTerm);
  };

  return (
    <section className="container my-5 rounded">
      <section className="my-5 row">
        <form className="d-flex flex-column justify-content-center">
          <div className="mb-3 col">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Search...
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search for a book"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex">
            <select
              className="form-select form-select-sm w-50"
              aria-label=".form-select-sm example"
            >
              <option defaultValue>Genres</option>
              <option value="1">Fantasy</option>
              <option value="2">Sci-Fi</option>
              <option value="3">Mystery</option>
              <option value="3">Thriller</option>
              <option value="3">Romance</option>
            </select>
            <select
              className="form-select form-select-sm w-50"
              aria-label=".form-select-sm example"
            >
              <option value="">Sort By</option>
              <option value="1">Title</option>
              <option value="2">Author</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="my-5 container align-items-center">
        <div className="row align-items-center">
          {books.map((book) => {
            return (
              <div
                className="card shadow-lg mx-4 rounded"
                style={{ width: "18rem" }}
                key={book._id}
              >
                <img
                  src="https://i.imgur.com/hJE4Jfx.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Title: {book.title}</h5>
                  <div className="d-flex justify-content-between align-items-center pt-4">
                    <a href="#" className="btn btn-primary">
                      Loan
                    </a>
                    <a
                      href={"/bookpage/" + book._id}
                      className="btn btn-primary"
                    >
                      Visit Book
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
