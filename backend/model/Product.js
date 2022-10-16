const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    decs :  {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    imageLink : {
        type : String
    },
    categoryId: { 
        type: mongoose.Types.ObjectId, 
        ref: "Category", required: true 
    },
})

module.exports =  mongoose.model("Product", productSchema);