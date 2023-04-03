/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// const mongoose = require("mongoose");
// const orderSchema=new mongoose.Schema({
//     customerid:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'customers'
//     },
//     status:{
//         type:String
//     },
//     BillingAddress:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'billingAddress'
//     },
//     payment:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'payment'
//     },
//     productId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'product'
//     }},
//     {
//      timestamps: true}

// )
// const ordermodel= mongoose.model('order', orderSchema);
// module.exports = {ordermodel};


const mongoose = require("mongoose"); 
const orderSchema=new mongoose.Schema({
    customerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    status:{
        type:String
    },
    street: String,
    city : String,
    State : String,
    pin : Number,
    payment : String,

    quantity : Number,

    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }},
    {
     timestamps: true}
)
const ordermodel= mongoose.model('order', orderSchema);
module.exports = {ordermodel};