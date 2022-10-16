import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import './YourOrders.css'

const YourOrders = () => {
    const [orders , setorders] = useState([]);
    const sendReq : Function = async () => {
        const res : any  = await axios
          .get("http://localhost:5000/api/order")
          .catch((err) => console.log(err));
        const data:any = await res.data;
        return data;
      };
      useEffect(() => {
        sendReq().then((data:any) => {
          setorders(data.order);
        });
      }, []);
      console.log(orders);

  return (
    <Container>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<div className="container bootdey">
    <div className="panel panel-default panel-order">
        <div className="panel-heading">
            <strong>Order history</strong>
          
        </div>

        <div className="panel-body">
            {
                orders && 
                orders.map((order:any , index:number) => (
                    <div className="row">
                    <div className="col-md-2"><img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="media-object img-thumbnail" /></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <span><strong>Order name</strong></span> <span className="label label-info">{order.name}</span><br />
                                Quantity : {order.products.length}, cost: {order.totalAmount} <br />
                           </div>
                            <div className="col-md-12">order made on: 05/31/2014</div>
                        </div>
                    </div>
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