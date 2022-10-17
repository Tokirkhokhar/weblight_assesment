import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import './YourOrders.css'

const YourOrders = () => {
    const [orders , setorders] = useState([]);
    const sendReq : Function = async () => {
        const res : any  = await axios
          .get("http://localhost:5000/api/order/getById/634ba989da060a8aae85c0cd")
          .catch((err) => console.log(err));
        const data:any = await res.data;
        return data;
      };
      useEffect(() => {
        sendReq().then((data:any) => {
          setorders(data);
        });
      }, []);
      console.log(orders);

  return (
    <Container>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<div className="container bootdey">
    <div className="panel panel-default panel-order">
        <div className="panel-heading">
            <h4 className='text-center m-3'>Order history</h4>
            <hr />
          
        </div>

        <div className="panel-body">
            {
                orders && 
                orders.map((order:any , index:number) => (
                    <div className="row mt-4 title-order">
                     <div className="col-md-4">
                     <span><strong>Name: </strong></span> <span className="label label-info">{order.name}</span><br />
                     </div>
                     <div className="col-md-8">
                     <span><strong>Address: </strong></span> <span className="label label-info">{order.address}</span><br />
                     </div>
                     { order.products.map((prod:any) => (
                      <div className='row p-2  border mb-4'>
                      <div className="col-md-2">
                        <img src={prod.prod.imageLink} className="media-object img-thumbnail" /></div>
                       <div className="col-md-10">
                           <div className="row product-details">
                               <div className="col-md-12">
                                   <h5>{prod.prod.name}</h5>
                                    <p>{prod.prod.desc}</p>
                                   <p>Quantity : {prod.qnt} , Price : {prod.prod.price}</p>  <br />
                              </div>
                           </div>
                       </div>
                      </div>
                     )) }
                    <div className="col-md-12"><p 
                    id='Orderdate'>Order made on: {order.date.substring(0,10)} </p></div>
                   </div>
                ))
                }
        </div>
        </div>
</div>
    </Container>
  )
}

export default YourOrders