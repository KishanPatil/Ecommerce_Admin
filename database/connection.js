/**
 * @description require mongoose
 */
const mongoose = require("mongoose");
// import { MongoClient } from "mongodb";
mongoose.set("strictQuery", false);

/**
 * c@description Connection mongoose
 */
const url='mongodb://0.0.0.0:27017/ecomerce'
const connectionDb = async()=>{ 
    await mongoose.connect(url)
   console.log("connected")
}

const closeDb=  async() =>{
                await mongoose.connection.close();
                console.log("close")
}

module.exports = {
    connectionDb,
    closeDb
}