import React from 'react'

export const Search = () => {
  return (
    <section className='container my-5 rounded'>
      <form className='d-flex flex-column justify-content-center' action="">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Search...</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Search for a book" />
        </div>
        <div class='d-flex'>
          <select class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
            <option selected>Genras</option>
            <option value="1">Fantasy</option>
            <option value="2">Sci-Fi</option>
            <option value="3">Mistery</option>
            <option value="3">Thriller</option>
            <option value="3">Romance</option>
          </select>
          <select class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
            <option selected>Sort By</option>
            <option value="1">Title</option>
            <option value="2">Author</option>
          </select>
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </form>
    </section>
  )
}
