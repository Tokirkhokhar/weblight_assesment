const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    address :  {
        type: String,
        required: true,
    },
    totalAmount: {
        type: String,
        required: true,
    },
    products: [{ 
        type: mongoose.Types.ObjectId, 
        ref: "Product", required: true 
    }],
})

module.exports =  mongoose.model("Order", orderSchema);