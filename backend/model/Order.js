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
        type: Number,
        required: true,
    },
    products:[],
    userId : { 
        type: mongoose.Types.ObjectId, 
        ref: "User",
    },
    date: {
        type :Date,
        default : Date.now()
    }
})

module.exports =  mongoose.model("Order", orderSchema);