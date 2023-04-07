const mongoose = require("mongoose"); 
/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const checkoutSchema=new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'order'
    }
},
{
    timestamps: true})
const checkoutmodel= mongoose.model('checkout', checkoutSchema);
module.exports = {checkoutmodel};