/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require("mongoose"); 
const billingAddressSchema=new mongoose.Schema({
    city:{
        type:String
    },
    state:{
        type:String},
    pincode:{
        type:Number}
},
{
 timestamps: true})
const billingAddressmodel= mongoose.model('billingAddress', billingAddressSchema);
module.exports = {billingAddressmodel};