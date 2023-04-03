/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
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