import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export const Bookpage = () => {
  const params = useParams();
  const user = Cookies.get("access_token");
  const [book, setBook] = useState({}); //stores the book information
  const [owner, setOwner] = useState(""); //stores the owners name
  const [borrowed, setBorrowed] = useState(false); //checks if the book is borrowed or not
  const [getUser, setGetUser] = useState({}); //stores the loggedin users information
  const [getCity, setGetCity] = useState(""); // stores the city of the user

  //function to fetch the book information
  const getBook = async () => {
    try {
      const res = await axios
        .get(process.env.REACT_APP_API_URL + "book/" + params.id)
        .then((res) => {
          console.log(res.data);
          setBook(res.data.book);
          setGetCity(res.data.city);
        });
    } catch (e) {
      console.log(e);
    }
  };

  //Function to fetch the owner of the book
  const getOwner = async (id) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + `user/${id}`);
      // Return the owners first name
      setOwner(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  //fetch the users information by JWT token
  const checkUser = async () => {
    //User sends its access_token in headers to BE to be decoded.
    await axios
      .get(process.env.REACT_APP_API_URL + "user/protected", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        if (res.data.user) {
          //Stores user info into the state.
          setGetUser(res.data.user);
        }
      });
  };

  //Function to Borrow a book
  const OnBorrow = async (Bid) => {
    const id = params.id;
    const newBorrower = JSON.stringify({ borrower: Bid });
    await axios
      .put(process.env.REACT_APP_API_URL + `book/${id}`, newBorrower, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {});
  };

  useEffect(() => {
    //checks if there is a user logged in or not
    if (user) {
      checkUser();
    }
    getBook();
    if (book) {
      //if book has something stored it will then run the function
      if (book.owner) {
        getOwner(book.owner);
      }
    }
    //Check to see if the book is avalible to borrow
    if (book.borrower === undefined || book.borrower === null) {
      setBorrowed(true);
    } else {
      setBorrowed(false);
    }
  }, [book.owner, book.borrower]);

  return (
    <div className="lightbrownbg">
      <section className="container text-center p-5">
        <div className="card shadow-lg d-flex align-items-center">
          <h2 className="fw-bold m-4"> {book.title}</h2>
          <img
            className="rounded mx-auto d-block m-3"
            src={process.env.REACT_APP_API_URL + `uploads/${book.image}`}
            style={{ width: "50%", height: "auto" }}
            alt="Book"
          />
          <h4 className="fw-bold">Description:</h4>
          <div className="container-sm">
            <p className="card-body mx-5">{book.description}</p>
            <p className="fw-bold">
              Author: <span className="fw-normal">{book.author}</span>{" "}
            </p>
            <p className="fw-bold">
              Genre: <span className="fw-normal">{book.genre}</span>
            </p>
            <p className="fw-bold">
              {" "}
              Condition: <span className="fw-normal"> {book.condition}</span>
            </p>
            <p className="fw-bold">
              Release Date:{" "}
              <span className="fw-normal">
                {" "}
                {new Date(book.released).toLocaleDateString()}
              </span>
            </p>
            <p className="fw-bold">
              Owned by:{" "}
              <span className="fw-normal">
                {" "}
                {owner.bookOwner} in {getCity}
              </span>
            </p>
            {/* Depending on if the book has a borrower or not or if user is not logged in, diffrent things will display */}

            {borrowed && user ? (
              <button
                className="btn btn-primary text-white m-3 btn-lg"
                style={{
                  backgroundColor: "#81647C",
                }}
                onClick={() => {
                  OnBorrow(getUser.id);
                }}
              >
                Borrow
              </button>
            ) : !user ? (
              <a href="/login" className="text-white">
                <p className="p-3 mb-2 bg-danger text-white">
                  Please Sign in to borrow book
                </p>
              </a>
            ) : (
              <p className="p-3 mb-2 bg-danger text-white">
                Book is already borrowed
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
