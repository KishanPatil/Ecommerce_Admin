/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require("mongoose"); 
const productBrandSchema=new mongoose.Schema({
    BrandName:{
        type: String
    },
    image:{
        type: String
    },
},{
    timestamps: true})
const productBrandmodel= mongoose.model('productBrand', productBrandSchema);
module.exports = {productBrandmodel};