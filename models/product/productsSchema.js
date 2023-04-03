/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require("mongoose"); 
const productsSchema=new mongoose.Schema({
    Name:{
        type:String
    },
    Description:{
        type:String
    },
    image:{
        type:String
    },
    Quantity:{
        type:Number
    },
    Price:{
        type:String
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productBrand'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productCategory'
    }

},
{
    timestamps: true})
const productsmodel= mongoose.model('products', productsSchema);
module.exports = {productsmodel};