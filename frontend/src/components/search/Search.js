import React from 'react'

export const Search = () => {
  return (
  <section className='container my-5 rounded'>
    <section className='my-5'>
      <form className='d-flex flex-column justify-content-center' action="">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Search...</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search for a book" />
        </div>
        <div className='d-flex'>
          <select className="form-select form-select-sm w-50" aria-label=".form-select-sm example">
            <option defaultValue>Genras</option>
            <option value="1">Fantasy</option>
            <option value="2">Sci-Fi</option>
            <option value="3">Mistery</option>
            <option value="3">Thriller</option>
            <option value="3">Romance</option>
          </select>
          <select className="form-select form-select-sm w-50" aria-label=".form-select-sm example">
            <option value="">Sort By</option>
            <option value="1">Title</option>
            <option value="2">Author</option>
          </select>
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
    </section>
    <section className='my-5 d-flex justify-content-center'>
      <div className="card" style={{width: "18rem"}}>
        <img src="https://i.imgur.com/hJE4Jfx.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
            <div className="card" style={{width: "18rem"}}>
        <img src="https://i.imgur.com/hJE4Jfx.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </section>
  </section>
  )
}
