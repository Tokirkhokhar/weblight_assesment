import React from 'react'
import "./Fillter.css"

const Fillter = () => {
  return (
    <>
      <div className="container c1">
        <div className="dropdown">
            
                <select className ="form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
        <div className="dropdown">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Price</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
        </div>
        <button type="button" className="btn btn-outline-danger">Search</button>
      </div>
    </>
  )
}

export default Fillter