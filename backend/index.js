const express = require("express");

const  userRouter  = require("./router/userRouter");
const catRouter = require("./router/categoryRouter");

require("./config/db");
const cors = require('cors');

const app = express();

app.use(cors());

app.set("view engine","ejs");
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/category",catRouter);
app.use("/api",(req,res,next) =>{
    res.send("hello")
})

app.listen(5000, () => console.log("app started at 5000..."));
