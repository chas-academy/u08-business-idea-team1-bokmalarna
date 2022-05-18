import React from 'react';
import Nav from '../nav/nav';

export const Bookpage = () => {
  return (
    <div>
      <Nav />

      <section>
        <h2>Book Title</h2>
        <div>Image</div>
        <h3>Description:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in lacus enim. 
          Aenean auctor bibendum tempor. Ut quis rhoncus ipsum. Nunc eget nunc quis nulla 
          imperdiet ullamcorper. Donec commodo mi blandit, luctus sapien id, facilisis nisl. 
          Nullam rutrum diam a mattis vulputate.</p>

        <p>Author: Ugglan Ugglansson</p>
        <p>Genre: Thriller</p>
        <p>Condition: Crappy</p>
        <p>Release Date: 10/05/2030</p>

        <p>Owned by: Ugglemor</p>

        <button>Borrow</button>
      </section>
    </div>
  )
}
