import React from "react";
import Nav from "../nav/nav";

export const Addbook = () => {
  return (
    <section>
      <Nav />

      <form method="POST">
        <label>Title</label>
        <input type="text" name="title" />

        <label>Upload Image</label>
        <input type="file" name="image" />

        <label>Author</label>
        <input type="text" name="author" />

        <label>Description</label>
        <input type="text" name="description" />

        <label for="genre">Genre</label>
        <select name="genre">
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

        <label>Condition</label>
        <input type="text" name="condition" />

        <label>Description</label>
        <input type="text" name="desc" />

        <label>Release Date</label>
        <input type="date" name="release" />

        <a href="/dashboard">Cancel</a>
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};
