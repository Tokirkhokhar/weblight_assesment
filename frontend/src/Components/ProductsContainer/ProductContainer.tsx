import React  , { useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from '../Product card/ProductCard'
import axios from "axios";

import "./ProductContainer.css"

const ProductContainer = () => {
  const [products , setproducts] = useState([]);
  const [price,setprice]=useState();
  const [category,setcategory]=useState();
  const handleChangePrice=(e:any)=>{
      setprice(e.target.value);
  }
  const handleChangeCategory=(e:any)=>{
    setcategory(e.target.value);
}
  const sendReq : Function = async () => {
    const res : any  = await axios
      .get("http://localhost:5000/api/product")
      .catch((err) => console.log(err));
    const data:any = await res.data;
   console.log(data);
   
    return data;
  };
  useEffect(() => {
    sendReq().then((data:any) => {
      setproducts(data.products);
    });
  }, []);
  // console.log(products);
  // console.log(category);
  function inrange(product:any){
    return (product.price<500);
  }
  const handleSbmit=(e:any)=>{
    setprice(price)
    setcategory(category)
    let result=products.filter(inrange)
    setproducts(result);
    console.log(result);
    
  } 
  console.log(products);
  
  return (
    <>
     {/* <Fillter cat={setCategory} pri={setPrice} /> */}
     <div className="container c1">
        <div className="dropdown">
                <select className ="form-select" aria-label="Default select example" onChange={handleChangeCategory}>
                  <option selected>Category</option>
                  <option value="0">One</option>
                  <option value="1">Two</option>
                  <option value="2">Three</option>
                </select>
        </div>
        <div className="dropdown" onChange={handleChangePrice}>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Price</option>
                  <option value="0">0-100</option>
                  <option value="1">100-500</option>
                  <option value="2">500-1000</option>
                </select>
        </div>
        <button type="button" className="btn btn-outline-danger" onClick={handleSbmit}>Search</button>
      </div>
      <Container className='p_container'>    
                
           {products &&  
          products.map((product:any , index:number) => (
            <ProductCard key={index} id={product._id} prod={product} />
          ))}
      </Container>
    </>
  )
}

export default ProductContainer