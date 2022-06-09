import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Addbook = () => {
  const user = Cookies.get("access_token");
  const [userInput, setUserInput] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    condition: "",
    release: "",
  });
  const [file, setFile] = useState();
  const [getUser, setGetUser] = useState("");
  const navigate = useNavigate();

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
          console.log("checkuser", res.data.user);
          //Stores user info into the state.
          setGetUser(res.data.user.id);
        }
      });
  };

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", userInput.title);
    form.append("author", userInput.author);
    form.append("file", file);
    form.append("description", userInput.description);
    form.append("genre", userInput.genre);
    form.append("condition", userInput.condition);
    form.append("release", userInput.release);
    form.append("owner", getUser);

    createBook(form);
  };

  const createBook = async (form) => {
    try {
      const response = await axios
        .post(process.env.REACT_APP_API_URL + "book/newBook", form)
        .then((res) => {
          console.log(res.data);
          alert("Book created successfully!");
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
      alert("Failed to create book, please try again!");
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      checkUser();
    }
  }, [user]);

  return (
    <section className="lightbrownbg">
      <div className="container text-center p-5">
        <form
          encType="multipart/form-data"
          className="card shadow-lg d-flex align-items-center"
        >
          <h2 className="m-4 fw-bold">Add a book</h2>

          <label className="mt-3 mb-1">Title</label>
          <input
            className="form-control w-50"
            type="text"
            name="title"
            onChange={onChange}
            required="required"
          />

          <label className="mt-3 mb-1">Upload Image</label>
          <input
            className="form-control w-50"
            type="file"
            name="file"
            accept="image/*"
            onChange={imageHandler}
            required="required"
          />

          <label className="mt-3 mb-1">Author</label>
          <input
            className="form-control w-50"
            type="text"
            name="author"
            onChange={onChange}
            required="required"
          />

          <label className="mt-3 mb-1">Description</label>
          <input
            className="form-control w-50"
            type="text"
            name="description"
            onChange={onChange}
            required="required"
          />

          <label className="mt-3 mb-1" name="genre">
            Genre
          </label>
          <select
            className="form-select w-50 text-center"
            name="genre"
            value={userInput.genre}
            onChange={onChange}
            required="required"
          >
            <option></option>
            <option value={"cookbook"}>Cookbook</option>
            <option value={"health"}>Health/fitness</option>
            <option value={"philosophy"}>Philosophy</option>
            <option value={"crime"}>Crime</option>
            <option value={"travel"}>Travel</option>
            <option value={"action"}>Action and Adventure</option>
            <option value={"history"}>History</option>
            <option value={"children"}>Childrens books</option>
            <option value={"comic"}>Comic</option>
            <option value={"drama"}>Drama</option>
            <option value={"fantasy"}>Fantasy</option>
            <option value={"horror"}>Horror</option>
            <option value={"poetry"}>Poetry</option>
            <option value={"romance"}>Romance</option>
            <option value={"scifi"}>Science fiction</option>
            <option value={"thriller"}>Thriller</option>
            <option value={"young"}>Young adult</option>
          </select>

          <label className="mt-3 mb-1">Condition</label>
          <input
            className="form-control w-50"
            type="text"
            name="condition"
            onChange={onChange}
            required="required"
          />

          <label className="mt-3 mb-1 ">Release Date</label>
          <input
            className="form-control w-50 text-center"
            type="date"
            name="release"
            onChange={onChange}
            required="required"
          />

          <input
            className="form-control w-50 text-center"
            type="hidden"
            name="owner"
            value={getUser}
            required="required"
          />

          <div className="mt-2">
            <a
              className="btn btn-outline-secondary bg-danger text-white m-3"
              href="/dashboard"
            >
              Cancel
            </a>
            <button
              className="btn btn-outline-secondary"
              type="submit"
              onClick={onSubmit}
            >
              Add book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
