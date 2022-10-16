import React from 'react'
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <>
      <div className="card p_card">
            <img src="https://m.media-amazon.com/images/I/81ESER40J1L._SX569_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="roww">
                   <h5 className="card-title">Chair</h5>
                   <p>504</p>
                </div>
                <p>furnished</p>
                 <a href="#" className="btn btn-primary">Add to card</a>
            </div>
        </div>
    </>
  )
}

export default ProductCard