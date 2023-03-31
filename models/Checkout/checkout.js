const mongoose = require("mongoose"); 
const checkoutSchema=new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
},
{
    timestamps: true})
const checkoutmodel= mongoose.model('checkout', checkoutSchema);
module.exports = {checkoutmodel};