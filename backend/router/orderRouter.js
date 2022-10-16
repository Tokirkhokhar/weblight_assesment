const express = require("express");
const { getAllOrder , addNewOrder,getOrderByUserId } = require("../controller/orderController");
const orderRouter = express.Router();


orderRouter.get("/",getAllOrder);
orderRouter.post("/addNewOrder", addNewOrder);
orderRouter.get("/getById/:id" , getOrderByUserId);

module.exports =  orderRouter;