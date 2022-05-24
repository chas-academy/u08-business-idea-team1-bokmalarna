import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import axios from "axios";

export const Addbook = () => {
  const API_URL = "http://localhost:8080/book/";

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    description: "",
    genre: "",
    condition: "",
    release: "",
    owner: ""
  });

  // const [formErrors, serFormErrors] = useState({});
  const { title, image, author, description, genre, condition, release } = formData;
  
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
  };

  // useEffect(() => {
  //   if (error === false) {
  //     addBook(formData);
  //   }
  // }, [error]);

  const addBook = async (userData) => {
    await axios.post(API_URL + "/", userData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <section className="lightbrownbg">
      <Nav />
      <div className='container text-center p-5'>
        <form method="POST" className='card shadow-lg d-flex align-items-center'>
          <h2 className="m-4 fw-bold">Add a book</h2>
          <label className="mt-3 mb-1">Title</label>
          <input className="form-control w-50" type="text" name="title" value={title} onChange={onChange}/>

          <label className="mt-3 mb-1">Upload Image</label>
          <input className="form-control w-50" type="file" name="image" value={image} onChange={onChange}/>

          <label className="mt-3 mb-1">Author</label>
          <input className="form-control w-50" type="text" name="author" value={author} onChange={onChange}/>

          <label className="mt-3 mb-1">Description</label>
          <input className="form-control w-50" type="text" name="description" value={description} onChange={onChange}/>

          <label className="mt-3 mb-1" for="genre">Genre</label>
          <select className="form-select w-50 text-center" name="genre" value={genre} onChange={onChange}>
            <option></option>
            <option value={"biography"}>Biography</option>
            <option value={"autobiography"}>Autobiography</option>
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
          <input className="form-control w-50" type="text" name="condition" value={condition} onChange={onChange}/>

          <label className="mt-3 mb-1 ">Release Date</label>
          <input className="form-control w-50 text-center" type="date" name="release" value={release} onChange={onChange}/>

          <div className="mt-2">
            <a className='btn btn-outline-secondary bg-danger text-white m-3' href="/dashboard">Cancel</a>
            <button className='btn btn-outline-secondary purple text-white m-3' type="submit" onClick={onSubmit}>Add book</button>
          </div>
        </form>
      </div>
    </section>
  );
};
