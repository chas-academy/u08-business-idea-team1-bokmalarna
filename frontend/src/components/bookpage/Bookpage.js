import React, { useEffect } from "react";
import Nav from "../nav/nav";
import Footer from "../footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Bookpage = () => {
  const [book, setBook] = useState({});

  const API_URL = "https://bookowl-backend.herokuapp.com/book/";

  const getBook = async () => {
    const { id } = useParams();
    await axios.get(API_URL + { id }).then((res) => {
      if (res.data) {
        console.log(res.data);
        setBook(res.data);
      }
    });
  };

  useEffect(() => {
    getBook();
  }, [book]);

  return (
    <div className="lightbrownbg">
      <section className="container text-center p-5">
        <div className="card shadow-lg d-flex align-items-center">
          <h2 className="m-4 fw-bold">{book.title}</h2>
          <img
            className="rounded mx-auto d-block m-3"
            src="https://www.kathrynlasky.com/assets/covers/owl3.jpg"
            style={{ width: "50%", height: "auto" }}
            alt="Book"
          />
          <h3>Description:</h3>
          <div className="container-sm">
            <p className="card-body mx-5">{book.description}</p>

            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Condition: {book.condition}</p>
            <p>Release Date: {book.released}</p>

            <p>Owned by: Ugglemor</p>

            <button className="btn btn-outline-secondary purple text-white m-3">
              Borrow
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
