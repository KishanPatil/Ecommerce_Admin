/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require("mongoose"); 
const customerAddressSchema=new mongoose.Schema({
    city:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:Number
    }
},
{
    timestamps: true})
const customerAddressmodel= mongoose.model('customerAddress', customerAddressSchema);
module.exports = {customerAddressmodel};