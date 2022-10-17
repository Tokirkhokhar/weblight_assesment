import React  , { useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from '../Product card/ProductCard'
import axios from "axios";

import "./ProductContainer.css"

const ProductContainer = () => {
  const [products , setproducts] = useState([]);
  const [price,setprice]=useState("-1");
  const [category,setcategory]=useState("-1");
  const [prevProduct, setPrevProduct] = useState([]);
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
      setPrevProduct(data.products);
    });
  }, []);
  // console.log(products);
  const handleSbmit=(e:any)=>{
    setprice(price)
    var max:number 
    var min:number
    var cat:String
    switch (price) {
      case "0":
         max=100;
         min=0;
        break;
      case "1":
         max=500;
         min=101;
         break;
      case "2":
         max=1000;
         min=501;
        break;
      default:
         min = 0
         max = 100000000
    }
    setcategory(category)
    switch (category) {
      case "0":
         cat="Electronics"
        break;
      case "1":
        cat="furnished"
         break;
     
    }
    let result= prevProduct.filter( function(product:any){
        console.log(max);
        
      return(product.price <= max && product.price >= min  && (category!="-1"?product.catName==cat:true))
    })
    setproducts(result);
    
  } 
  console.log(products);
  
  return (
    <>
     {/* <Fillter cat={setCategory} pri={setPrice} /> */}
     <div className="container c1">
        <div className="dropdown">
                <select className ="form-select" aria-label="Default select example" onChange={handleChangeCategory}>
                  <option selected value="-1">Category</option>
                  <option value="0">Electronic</option>
                  <option value="1">Furnished</option>
                </select>
        </div>
        <div className="dropdown" onChange={handleChangePrice}>
                <select className="form-select" aria-label="Default select example">
                  <option selected value="-1">Price</option>
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