import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = () => {

    const plus=(id:any)=>{
        const ele= document.getElementById(id) as HTMLInputElement;
        ele?.stepUp();
    }
    const cancle=(id:any)=>{
        console.log("cancling");
    }
    const minus=(id:any)=>{
        const ele= document.getElementById(id) as HTMLInputElement;
        ele?.stepDown();
    }
    const Bynow=()=>{
        alert("Yout order successfully placed !!")
    }
  return (
    <Container>
        {/* <div className="cartBox">
            <div className="cartImage">
                <img src="https://m.media-amazon.com/images/I/81ESER40J1L._SX569_.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="cartInfo">
                <div className="roww">
                    <p>name</p>
                    <p>catagory</p>
                </div>
                <div className="roww">
                    <p>quantity</p>
                </div>
                <div className="row">
                    <p>price</p>
                </div>
                <div className="row">
                    <button className='btn btn-primary'> By Now </button>
                </div>
            </div>
        </div> */}

<section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{borderRadius: '15px'}}>
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" style={{width: '150px'}} alt="Generic placeholder image" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black"><i className="fas fa-times" onClick={()=>cancle(1)} /></a>
                          <h5 className="text-primary">Samsung Galaxy M11 64GB</h5>
                          <h6 style={{color: '#9e9e9e'}}>Color: white</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                            <div className="def-number-input number-input safari_only" >
                              <button onClick={()=>minus(1)} className="minus" />
                              <input className="quantity fw-bold text-black" min={0} name="quantity" defaultValue={2} type="number" id='1'/>
                              <button onClick={()=>plus("1")} className="plus" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" className="img-fluid" style={{width: '150px'}} alt="Generic placeholder image" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black"><i className="fas fa-times" /></a>
                          <h5 className="text-primary">Headphones Bose 35 II</h5>
                          <h6 style={{color: '#9e9e9e'}}>Color: Red</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                            <div className="def-number-input number-input safari_only">
                              <button onClick={minus} className="minus" />
                              <input className="quantity fw-bold text-black" min={0} name="quantity" defaultValue={1} type="number" />
                              <button onClick={plus} className="plus" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp" className="img-fluid" style={{width: '150px'}} alt="Generic placeholder image" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black"><i className="fas fa-times" /></a>
                          <h5 className="text-primary">iPad 9.7 6-gen WiFi 32GB</h5>
                          <h6 style={{color: '#9e9e9e'}}>Color: rose pink</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                            <div className="def-number-input number-input safari_only">
                              <button onClick={minus} className="minus" />
                              <input className="quantity fw-bold text-black" min={0} name="quantity" defaultValue={2} type="number" />
                              <button onClick={plus} className="plus" />
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <hr className="mb-4" style={{height: '2px', backgroundColor: '#1266f1', opacity: 1}} />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div>
                      <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: '#e1f5fe'}}>
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">2261$</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input type="text" id="typeText" className="form-control form-control-lg"  defaultValue="1234 5678 9012 3457" minLength={19} maxLength={19} />
                          <label className="form-label" htmlFor="typeText">Card Number</label>
                        </div>
                        <div className="form-outline mb-5">
                          <input type="text" id="typeName" className="form-control form-control-lg"  defaultValue="John Smith" />
                          <label className="form-label" htmlFor="typeName">Name on card</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input type="text" id="typeExp" className="form-control form-control-lg" defaultValue="01/22" size={7} minLength={7} maxLength={7} />
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input type="password" id="typeText" className="form-control form-control-lg" defaultValue="●●●" size={1} minLength={3} maxLength={3} />
                              <label className="form-label" htmlFor="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a href="#!">obcaecati sapiente</a>.</p>
                        <button type="button" className="btn btn-primary btn-block btn-lg" onClick={Bynow}>Buy now</button>
                        <h5 className="fw-bold mb-5" style={{position: 'absolute', bottom: 0}}>
                          <Link to="/"><i className="fas fa-angle-left me-2" />Back to shopping</Link>
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
  )
}

export default Cart