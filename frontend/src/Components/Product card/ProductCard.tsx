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
  
  
  const prod : any = props.prod;

  
  const addTocart : Function = (id:string) => {    
    console.log(id);
  }
  return (
    <>
      <div className="card p_card">
            <img src={prod.imageLink} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="roww">
                   <h5 className="card-title">{prod.name}</h5>
                   <p>{prod.price}</p>
                </div>
                <p className='text-info'>{prod.catName}</p>
                <p>{prod.decs}</p>
                <p className="btn btn-primary" onClick={()=>addTocart(prod._id)}>Add to card</p>
            </div>
        </div>
    </>
  )
}

export default ProductCard