const Product = require("../model/Product");
const bcrypt = require("bcryptjs");

const getAllProduct = async (req,res,next) =>{
  res.set('Access-Control-Allow-Origin', '*');
    let products;

    try{
        products = await Product.find();
    }
    catch(err){
        console.log(err);
    }
    if(!products){
        return res.status(404).json({ message : "products are not found"})
    }

    return res.status(200).json({products});
}

const addNewProduct = async (req,res,next) =>{
  res.set('Access-Control-Allow-Origin', '*');
   const { name , desc , price , imageLink , categoryId } = req.body;
 
   const product = new Product({
    name , desc , price , imageLink , categoryId
   });

   try{
       product.save();
       return res.status(201).json({ product })
   }
   catch(e){console.log(e);}
}


module.exports = { getAllProduct, addNewProduct};