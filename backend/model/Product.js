const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    desc :  {
        type: String,
        required : true,
        default : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tortor vitae est pellentesque ullamcorper et nec diam. Sed auctor elit quis mattis posuere."
    },
    price: {
        type: Number,
        required: true,
    },
    imageLink : {
        type : String
    },
    catName : {
        type : String,
        default : "None"
    },
    categoryId: { 
        type: mongoose.Types.ObjectId, 
        ref: "Category", required: true 
    },
})

module.exports =  mongoose.model("Product", productSchema);