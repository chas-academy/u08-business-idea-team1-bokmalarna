import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/Footer"

export const Addbook = () => {
  return (
    <section className="lightbrownbg">
      <Nav />
      <div className='container text-center p-5'>
        <form method="POST" className='card shadow-lg d-flex align-items-center'>
          <h2 className="m-4 fw-bold">Add a book</h2>
          <label className="mt-3 mb-1">Title</label>
          <input className="form-control w-50" type="text" name="title" />

          <label className="mt-3 mb-1">Upload Image</label>
          <input className="form-control w-50" type="file" name="image" />

          <label className="mt-3 mb-1">Author</label>
          <input className="form-control w-50" type="text" name="author" />

          <label className="mt-3 mb-1">Description</label>
          <input className="form-control w-50" type="text" name="description" />

          <label className="mt-3 mb-1" for="genre">Genre</label>
          <select className="form-select w-50 text-center" name="genre">
            <option></option>
            <option>Biography</option>
            <option>Autobiography</option>
            <option>Cookbook</option>
            <option>Health/fitness</option>
            <option>Philosophy</option>
            <option>Crime</option>
            <option>Travel</option>
            <option>Action and Adventure</option>
            <option>History</option>
            <option>Childrens books</option>
            <option>Comic</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Poetry</option>
            <option>Romance</option>
            <option>Science fiction</option>
            <option>Thriller</option>
            <option>Young adult</option>
          </select>

          <label className="mt-3 mb-1">Condition</label>
          <input className="form-control w-50" type="text" name="condition" />

          <label className="mt-3 mb-1">Description</label>
          <input className="form-control w-50" type="text" name="desc" />

          <label className="mt-3 mb-1 ">Release Date</label>
          <input className="form-control w-50 text-center" type="date" name="release" />

          <div className="mt-2">
            <a className='btn btn-outline-secondary bg-danger text-white m-3' href="/dashboard">Cancel</a>
            <button className='btn btn-outline-secondary purple text-white m-3' type="submit">Add book</button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};
