import React from "react";

export const Home = () => {
  return (
    <main className="App bg-books py-5 px-5">
      <section className="mainPage w-75 m-auto">
        <div className="mainPage shadow bg-body rounded bg-opacity-75">
        <h1 className="text-center pt-4">Welcome to BookOwl!</h1>
        <div className="d-flex justify-content-center">
          <img src="bookowl.png" className="m-3" style={{ width: 110 }} />
        </div>
        <p className="text-center fs-4 m-2 p-2">
          BookOwl is a platform where you can loan books from other people as
          well as loan out your books to other people.
        </p>
        <p className="text-center fs-4 m-2 p-3">
          Get started by creating an account or browsing for a book!
        </p>
        </div>
      </section>
    </main>
  );
};

{
  /* <section className="container p-5 mt-5 mb-5 shadow bg-body rounded bg-opacity-75">
<h1 className="display-6 text-center pt-5 fw-normal">
  Welcome to BookOwl!
</h1>
<div className="d-flex justify-content-center my-5">
  <img src="https://i.imgur.com/S8WCatY.png" alt="BookOwl Logo" />
</div>
<div className="container">
  <p className="text-center fs-4 m-5">
	BookOwl is a platform where you can loan books from other people as
	well as loan out your books to other people. Maybe you're a student
	and don't want to spend more money on literature? Or maybe you just
	can't find that specific book about horned owls in the book store?
	Or maybe, you just want to share your favourite book..
  </p>
</div>
<div className="text-center my-5">
  <h3>Get started by login or register!</h3>
</div>
</section> */
}
