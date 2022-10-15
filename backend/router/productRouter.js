const express = require("express");
const { getAllProduct , addNewProduct } = require("../controller/productContoller");
const prodRouter = express.Router();


prodRouter.get("/",getAllProduct);
prodRouter.post("/addNewProduct", addNewProduct);

module.exports =  prodRouter;