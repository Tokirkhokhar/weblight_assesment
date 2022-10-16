import React from 'react'
import "./ProductCard.css"
import {useState} from 'react'

interface Product {
  name: string,
  decs: string,
  price : number,
  imageLink : string,
  catName : string,
  categoryId :  string,
}
const ProductCard = (props:any) => {
  
  
  const addItem = (prod:any)  => 
  {
    let localCart:any = localStorage.getItem("cart");
   
    localCart = JSON.parse(localCart);

    console.log(localCart);
    
    let cartCopy:any
    if(localCart != null)
    {
      cartCopy = [...localCart];
    }else{
      cartCopy = [];
    }
  
    
    // let existingItem:any = cartCopy.find(cartItem => cartItem.Prod == item );
    
    // //if item already exists
    // if (existingItem) {
    //     existingItem.quantity += item.quantity 
    // } else { //if item doesn't exist, simply add it
    //   cartCopy.push(item)
    // }
    
    //update app state
    cartCopy.push({
      qnt : 1,
      prod 
    })
    
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
    
  }
  
  const prod : any = props.prod;
  const jsonItems = localStorage.getItem("cart");
  
  const addTocart : Function = (prod:any) => {    
    addItem(prod)
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
                <p className="btn btn-primary" onClick={()=>addTocart(prod)}>Add to card</p>
            </div>
        </div>
    </>
  )
}

export default ProductCard