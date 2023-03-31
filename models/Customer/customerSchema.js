// const mongoose = require("mongoose");
// const customerSchema=new mongoose.Schema({
//     fname:{
//         type:String
//     },
//     lname:{
//         type:String
//     },
//     phone:{
//         type:Number
//     },
//     email:{
//         type:String
//     },
//     password:{
//         type:String
//     },
//     address:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'customerAddress'
//     }
// },
// {
//     timestamps: true})
// const customermodel= mongoose.model('customer', customerSchema);
// module.exports = {customermodel};

const mongoose = require("mongoose"); 
const customerSchema=new mongoose.Schema({
    fname:{
        type:String,
        require : true,
    },
    lname:{
        type:String,
        require : true,
    },
    phone:{
        type:Number,
        require : true,
    },
    email:{
        type:String,
        unique:true,
        require : true,
    },
    password:{
        type:String,
        require : true,
    },
    city:{
        type:String,
        require : true,
    },
    state:{
        type:String,
        require : true,
    },
    pincode:{
        type:String,
        require : true,
    },  
    otp:{
        type:String  
    }  
},
{
    timestamps: true})
const customermodel= mongoose.model('customer', customerSchema);
module.exports = {customermodel};