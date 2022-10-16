import React from 'react'
import { Container } from 'react-bootstrap'
import './YourOrders.css'

const YourOrders = () => {
  return (
    <Container>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<div className="container bootdey">
    <div className="panel panel-default panel-order">
        <div className="panel-heading">
            <strong>Order history</strong>
            {/* <div className="btn-group pull-right">
                <div className="btn-group">
                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Filter history <i className="fa fa-filter"></i></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Approved orders</a></li>
                        <li><a href="#">Pending orders</a></li>
                    </ul>
                </div>
            </div> */}
        </div>

        <div className="panel-body">
            <div className="row">
                <div className="col-md-2"><img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="media-object img-thumbnail" /></div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <span><strong>Order name</strong></span> <span className="label label-info">group name</span><br />
                            Quantity : 2, cost: $323.13 <br />
                       </div>
                        <div className="col-md-12">order made on: 05/31/2014</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"><img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="media-object img-thumbnail" /></div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <span><strong>Order name</strong></span> <span className="label label-info">group name</span><br />
                            Quantity : 2, cost: $323.13 <br />
                       </div>
                        <div className="col-md-12">order made on: 05/31/2014</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"><img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="media-object img-thumbnail" /></div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <span><strong>Order name</strong></span> <span className="label label-info">group name</span><br />
                            Quantity : 2, cost: $323.13 <br />
                       </div>
                        <div className="col-md-12">order made on: 05/31/2014</div>
                    </div>
                </div>
            </div>
           

           
        </div>
        </div>
</div>
    </Container>
  )
}

export default YourOrders