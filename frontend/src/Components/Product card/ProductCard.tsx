import React from 'react'
import "./ProductCard.css"
interface Product {
  name: string,
  decs: string,
  price : number,
  imageLink : string,
  catName : string,
  categoryId :  string,
}
const ProductCard = (props:any) => {
  console.log(props);
  
  const prod : any = props.prod;

  console.log(prod);
  
  return (
    <>
      <div className="card p_card">
            <img src="https://m.media-amazon.com/images/I/81ESER40J1L._SX569_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="roww">
                   <h5 className="card-title"></h5>
                   <p>504</p>
                </div>
                <p className='text-info'>furnished</p>
                <p>this is decsmilar to the contextual text color classes, easily set the background of an element to any contextual cl</p>
                 <a href="#" className="btn btn-primary">Add to card</a>
            </div>
        </div>
    </>
  )
}

export default ProductCard