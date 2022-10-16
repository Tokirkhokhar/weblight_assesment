const Category = require("../model/Category");
const bcrypt = require("bcryptjs");

const getAllCategory = async(req,res,next) =>{
    let categories;

    try{
        categories = await Category.find();
    }
    catch(err){
        console.log(err);
    }
    if(!categories){
        return res.status(404).json({ message : "categories are not found"})
    }

    return res.status(200).json({categories});
}

const addNewCat = async(req,res,next) =>{
   const { name , desc} = req.body;
 
   const category = new Category({
    name , desc
   });

   try{
       category.save();
       return res.status(201).json({ category })
   }
   catch(e){console.log(e);}
}


module.exports = { getAllCategory, addNewCat};