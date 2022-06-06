import axios from "axios";
import React, { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}book/search=${searchTerm}&location=${location}`
    );
    console.log(res);
    setBooks(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks(searchTerm, location);
  };

  return (
    <section className="container my-5 rounded">
      <section className="my-5 row">
        <h2 className="fw-bold text-center pb-2">SEARCH</h2>
        <form className="d-flex flex-column justify-content-center">
          <div className="mb-3 col">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search for a book or an author"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-50"
              id="location"
              placeholder="Filter by location"
              onChange={(e) => setLocation(e.target.value)}
            />
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
            {/* <select
              className="form-select form-select-sm w-50"
              aria-label=".form-select-sm example"
            >
              <option value="">Sort By</option>
              <option value="1">Title</option>
              <option value="2">Author</option>
            </select> */}
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
