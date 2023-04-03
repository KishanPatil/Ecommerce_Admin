/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require("mongoose"); 
const paymentSchema=new mongoose.Schema({
    Amount:{
        type:String
    },
    Method:{
        type:String
    },
    paymentStatus:{
        type:String
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    }},
    {
     timestamps: true}

)
const paymentsmodel= mongoose.model('payment', paymentSchema);
module.exports = {paymentsmodel};