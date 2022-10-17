import React from 'react'
import "./ProductCard.css"
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
    toast("Your Product Added to cart!")
    let localCart:any = localStorage.getItem("cart");
    let cartTotal:any = localStorage.getItem("total");

    localCart = JSON.parse(localCart);
    console.log(localCart);
    
    if(cartTotal == null)
    cartTotal = 0;
    
    
    cartTotal = parseInt(cartTotal) +  prod.price;
    
    localStorage.setItem("total", cartTotal)

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
                   <p style={{color: "green"}} >{prod.price} Rs</p>
                </div>
                <p style={{color: "purple"}}>{prod.catName}</p>
                <p>{prod.desc.substring(0,50)}</p>
                <p className="btn btn-primary" onClick={()=>addTocart(prod)}>Add to card</p>
            </div>
        </div>
        <ToastContainer/>
    </>

  )
}

export default ProductCard