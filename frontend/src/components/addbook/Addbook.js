import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import axios from "axios";

export const Addbook = () => {
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
  // const [image, setImage] = useState("");

  const { title, image, author, description, genre, condition, release, owner } = formData;
  
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    // setImage(e.target.files[0]);
    // setFormData({...formData, [e.target.name]: e.target.files[0]});
  };

  // const imageHandler = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.files[0]});
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    
    console.log(formData);
  };

  const addBook = async (formData) => {
    // console.log(formData.image);

    // const imageFile = formData.image;
    // const uploadPath = __dirname + './uploads' + imageFile.name;

    // console.log(imageFile);
    // console.log(uploadPath);

    await axios.post(process.env.REACT_APP_API_URL + "book/newBook", formData, {headers: { "content-type": "multipart/form-data" }}).then((res) => {
      console.log(res);
      //Här är något fel. 
    });
  };

  return (
    <section className="lightbrownbg">
      <Nav />
      <div className='container text-center p-5'>
        <form encType="multipart/form-data" className='card shadow-lg d-flex align-items-center'>
          <h2 className="m-4 fw-bold">Add a book</h2>
          <label className="mt-3 mb-1">Title</label>
          <input className="form-control w-50" type="text" name="title" value={title} onChange={onChange}/>

          <label className="mt-3 mb-1">Upload Image</label>
          <input className="form-control w-50" type="file" name="image" value={image} accept="image/*" onChange={onChange}/>

          <label className="mt-3 mb-1">Author</label>
          <input className="form-control w-50" type="text" name="author" value={author} onChange={onChange}/>

          <label className="mt-3 mb-1">Description</label>
          <input className="form-control w-50" type="text" name="description" value={description} onChange={onChange}/>

          <label className="mt-3 mb-1" name="genre">Genre</label>
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

          {/* <input className="visually-hidden" name="user" value={} /> */}
          <input className="form-control w-50 text-center" type="text" name="owner" value={owner} onChange={onChange} />

          <div className="mt-2">
            <a className='btn btn-outline-secondary bg-danger text-white m-3' href="/dashboard">Cancel</a>
            <button className='btn btn-outline-secondary purple text-white m-3' type="submit" onClick={onSubmit}>Add book</button>
          </div>
        </form>
      </div>
    </section>
  );
};
