const express = require("express");
const { getAllCategory, addNewCat } = require("../controller/catagoryController");
const catRouter = express.Router();


catRouter.get("/",getAllCategory);
catRouter.post("/addNewcat", addNewCat);

module.exports =  catRouter;