import React from 'react'
export default function Movie({ movie }) {

  return (
    <div className="col-md-4" style={{ maxWidth: "25%" }}>
      <div className="card mb-4 box-shadow" >
        <img className="card-img-top"
          alt="" style={{ display: "block" }}
          src={movie.Poster}
        />
        <div className="card-body">
          <div className="card-title font-weight-bold" >{movie.Title}</div>
          <div className="card-text text-capitalize font-weight-light">Type : {movie.Type}</div>
          <div className="card-text text-capitalize font-weight-light" >Genre: {movie.Genre}</div>
          <div className="card-text text-capitalize font-weight-light">Release Year: {movie.Year}</div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Add Favourite</button>
            </div>
            <small className="text-muted">{movie.Response}</small>
            <small className="text-muted">{movie.Runtime}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

