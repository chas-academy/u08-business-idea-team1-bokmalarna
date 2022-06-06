import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import axios from "axios";

export const Addbook = () => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   author: "",
  //   description: "",
  //   genre: "",
  //   condition: "",
  //   release: "",
  //   owner: ""
  // });
  const [image, setImage] = useState("");

  const { title, author, description, genre, condition, release, owner } = formData;
  
  const onChange = (e) => {
    e.preventDefault();

    // setFormData({...formData, [e.target.name]: e.target.value})

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = async () => {
      const data = new FormData();
      data.append("file", file);
      setImage(data);
    }
    reader.readAsDataURL(file);
  };

  // const imageHandler = (e) => {
  //   const reader = new FileReader();
  //   const file = e.target.files[0];

  //   reader.onloadend = async () => {
  //     const data = new FormData();
  //     data.append("file", file);
  //     // console.log(file)
  //     setImage(data);
  //     // ÄNDRA ALDRIG DATA TILL FILE IGEN
  //     // console.log(image)
  //   }
  //   reader.readAsDataURL(file);
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData(); 
    // formData.append("image", image);
    // formData.append("title", title);
    // formData.append("author", author);
    // formData.append("description", description);
    // formData.append("genre", genre);
    // formData.append("condition", condition);
    // formData.append("release", release);
    // formData.append("owner", owner);
    // formData.append("image", image);
    
    // const { title, author, description, genre, condition, release, owner } = formData;
    // image.append(formData);
    // image.push("author", author);
    // image.push("description", description);
    // image.push("genre", genre);
    // image.push("condition", condition);
    // image.push("release", release);
    // image.push("owner", owner);

    // console.log(formData)
    // console.log(image);
    addBook(image);
  };

  const addBook = async () => {
    // console.log(formData.image);

    // const imageFile = formData.image;
    // const uploadPath = __dirname + './uploads' + imageFile.name;

    // console.log(image);
    // console.log(formData);

    await axios.post(process.env.REACT_APP_API_URL + "book/newBook", image, {headers: { "content-type": "multipart/form-data" }}).then((res) => {
      console.log(res);
      //Här är något fel. 
    });
  };

  return (
    <section className="lightbrownbg">
      <div className='container text-center p-5'>
        <form encType="multipart/form-data" className='card shadow-lg d-flex align-items-center'>
          <h2 className="m-4 fw-bold">Add a book</h2>
          {/* <label className="mt-3 mb-1">Title</label>
          <input className="form-control w-50" type="text" name="title" value={title} onChange={onChange}/> */}

          <label className="mt-3 mb-1">Upload Image</label>
          <input className="form-control w-50" type="file" name="image" accept="image/*" onChange={onChange}/>

          {/* <label className="mt-3 mb-1">Author</label>
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
          {/* <input className="form-control w-50 text-center" type="text" name="owner" value={owner} onChange={onChange} /> */}

          <div className="mt-2">
            <a className='btn btn-outline-secondary bg-danger text-white m-3' href="/dashboard">Cancel</a> 
            <button className='btn btn-outline-secondary' type="submit" onClick={onSubmit}>Add book</button>
          </div>
        </form>
      </div>
    </section>
  );
};
