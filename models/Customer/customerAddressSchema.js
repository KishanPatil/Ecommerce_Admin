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