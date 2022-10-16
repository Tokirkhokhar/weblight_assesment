import React, { useState } from 'react'
import "./Fillter.css"

// interface Filter {
//   price : number,
// }

const Fillter = (props:any) => {
  const [products , setproducts] = useState([]);
  const [price,setprice]=useState();
  const [category,setcategory]=useState();
  const handleChangePrice=(e:any)=>{
      setprice(e.target.value);
  }
  const handleChangeCategory=(e:any)=>{
    setcategory(e.target.value);
}
  const handleSbmit=(e:any)=>{
    props.pri(price)
    props.cat(category)
  }


  return (
    <>
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
    </>
  )
}

export default Fillter