import React  , { useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from '../Product card/ProductCard'
import axios from "axios";

import "./ProductContainer.css"
const ProductContainer = () => {
  const [products , setproducts] = useState([]);
  const sendReq : Function = async () => {
    const res : any  = await axios
      .get("http://localhost:5000/api/product")
      .catch((err) => console.log(err));
    const data:any = await res.data;

    return data;
  };
  useEffect(() => {
    sendReq().then((data:any) => {
      setproducts(data.products);
    });
  }, []);
  console.log(products);

  return (
    
      <Container className='p_container'>
           {products &&
          products.map((product:any , index:number) => (
            <ProductCard key={index} id={product._id} prod={product} />
          ))}
      </Container>
    
  )
}

export default ProductContainer