const mongoose = require("mongoose"); 
const productCategorySchema=new mongoose.Schema({
    CategoryName:{
        type:String
    },
    image:{
        type:String
    },
},{
    timestamps: true})
const productCategorymodel= mongoose.model('productCategory', productCategorySchema);
module.exports = {productCategorymodel};