const Order = require("../model/Order");

const getAllOrder = async(req,res,next) =>{
    let order;

    try{
        order = await Order.find();
    }
    catch(err){
        console.log(err);
    }
    if(!order){
        return res.status(404).json({ message : "order are not found"})
    }

    return res.status(200).json({order});
}

const addNewOrder = async(req,res,next) =>{
   const { name , address , totalAmount , products , userId} = req.body;
 
   const order = new Order({
    name , address , totalAmount , products , userId
   });

   try{
       order.save();
       return res.status(201).json({ order })
   }
   catch(e){console.log(e);}
}


module.exports = { getAllOrder, addNewOrder};