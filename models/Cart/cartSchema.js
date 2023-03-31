const mongoose = require("mongoose"); 
const CartSchema=new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    products:[{
       "productid":{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
        },
        quantity:{
            type:Number}
    }]
},
{
 timestamps: true})
const cartmodel= mongoose.model('Cart', CartSchema);
module.exports = {cartmodel};