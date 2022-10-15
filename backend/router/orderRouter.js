const express = require("express");
const { getAllOrder , addNewOrder } = require("../controller/orderController");
const orderRouter = express.Router();


orderRouter.get("/",getAllOrder);
orderRouter.post("/addNewOrder", addNewOrder);

module.exports =  orderRouter;