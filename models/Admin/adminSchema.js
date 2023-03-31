const mongoose = require("mongoose"); 
const adminSchema=new mongoose.Schema({
    fristname:{
        type:String
    },
    lastname:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type: String
        
    }
},
{
    timestamps: true})
const adminmodel= mongoose.model('admin', adminSchema);
module.exports = {adminmodel};