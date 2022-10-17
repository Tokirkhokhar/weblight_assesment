import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from "axios"

interface ProductType {
  [key: string]: any;
}

const Cart = () => {
  let localCart: any = localStorage.getItem("cart");
  localCart = JSON.parse(localCart);
  const [products, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState <ProductType> ({});
  let totalNum: any = localStorage.getItem("total");
  totalNum = parseInt(totalNum);

  useEffect(() => {
    setProduct(localCart);
    setTotal(totalNum);
    console.log(products);
  }, []);

  // Increment 
  const plus = (id: any) => {
    let copyProd: any = [...products];
    const ele = document.getElementById(id.index) as HTMLInputElement;
    copyProd[id.index].qnt = copyProd[id.index].qnt + 1;
    setProduct(products);
    // change Total
    let tNum:number = total
    tNum += copyProd[id.index].prod.price;
     setTotal(tNum)
    
    ele?.stepUp();
  };
  
  const minus = (id: any) => {
    let copyProd: any = [...products];
    if (copyProd[id.index].qnt > 1) {
      copyProd[id.index].qnt = copyProd[id.index].qnt - 1;
      setProduct(products);
      let tNum:number = total
      tNum -= copyProd[id.index].prod.price;
      setTotal(tNum)
    }
    const ele = document.getElementById(id.index) as HTMLInputElement;
    ele?.stepDown();
  };
  
  const sendRequest = async () => {
    const res:any = await axios
      .post("http://localhost:5000/api/order/addNewOrder", formData )
      .catch((err) => console.log(err));
    const data:any = await res.data;
    return data;
  };

  const Buynow = () => {
    console.log(formData);
    formData.totalAmount = total;
    formData.products = products
    formData.userId = "634ba989da060a8aae85c0cd"
  
    sendRequest()
      .then((data) => console.log(data))
      .then(()=> localStorage. clear())
      .then(() => window.location.href = "/" );
  };

  const handleChange = (e:any) => {
    setFormData((prevState:any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>
                      {
                      products 
                      &&
                        products.map((product: any, index: number) => (
                          <div key={index}>
                            <div className="d-flex align-items-center mb-5">
                              <div className="flex-shrink-0">
                                <img
                                  src={product.prod.imageLink}
                                  className="img-fluid"
                                  style={{ width: "150px" }}
                                  alt="Generic placeholder image"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black">
                                  <i
                                    className="fas fa-times"
                                  />
                                </a>
                                <h5 className="text-primary">
                                  {product.prod.name}
                                </h5>
                                <h6 style={{ color: "#9e9e9e" }}>
                                  {product.prod.catName}
                                </h6>
                                <div className="d-flex align-items-center">
                                  <p className="fw-bold mb-0 me-5 pe-3">
                                    {product.prod.price}
                                  </p>
                                  <div className="def-number-input number-input safari_only">
                                    <button
                                      onClick={() => minus({ index })}
                                      className="minus"
                                    />
                                    <input
                                      className="quantity fw-bold text-black"
                                      min={0}
                                      name="quantity"
                                      type="number"
                                      id={index.toString()}
                                      value = {product.qnt}
                                    />
                                    <button
                                      onClick={() => plus({ index })}
                                      className="plus"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />

                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{total} $</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payment
                      </h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value = {formData.name}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="typeText">
                            Name 
                          </label>
                        </div>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeName"
                            name = "address"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            value = {formData.address}
                          />
                          <label className="form-label" htmlFor="typeName">
                            Address
                          </label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                          onClick={Buynow}
                        >
                          Buy now
                        </button>
                        <h5
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: 0 }}
                        >
                          <Link to="/">
                            <i className="fas fa-angle-left me-2" />
                            Back to shopping
                          </Link>
                        </h5>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
