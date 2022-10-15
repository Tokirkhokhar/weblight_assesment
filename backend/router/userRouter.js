const express = require("express");
const {  getAllUser , signUp ,logIn } = require("../controller/userController");
const userRouter = express.Router();


userRouter.get("/",getAllUser);
userRouter.post("/signup", signUp);
userRouter.post("/login" , logIn);

module.exports =  userRouter;