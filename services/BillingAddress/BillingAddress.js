/**
 * @author Kishan Patil
 */
// Importing the billingAddressmodel from billingAddressSchema file
const {billingAddressmodel} = require("../../models/BillingAddress/billingAddressSchema");

// Importing connectionDb and closeDb functions from connection file
const {connectionDb,closeDb}=require("../../database/connection")

// Function to get all billing addresses
const getAllAddress = async () => {
    try{
        // Connect to database
        await connectionDb()

        // Retrieve all documents from the billingAddressmodel collection
        const result = await billingAddressmodel.find()

        // Close the database connection
        await closeDb()

        // Return the result
        return result
    }
    catch(e){
        // Throw an error if there is any problem with the database connection or query
        throw new Error(e)
    }
}

// Function to get a billing address by id
const getAddressById = async (id) => {
    try{
        // Connect to database
        await connectionDb()

        // Retrieve the document with the given id from the billingAddressmodel collection
        const result = await billingAddressmodel.findById(id)

        // Close the database connection
        await closeDb()

        // Return the result
        return result
    }
    catch(e){
        // Throw an error if there is any problem with the database connection or query
        throw new Error(e)
    }
}

// Function to add a new billing address
const addAddress= async (city,state,pincode) => {
    try{
        // Connect to database
        await connectionDb()

        // Create a new document in the billingAddressmodel collection with the given city, state and pincode
        const result = await billingAddressmodel.create({
            city,
            state,
            pincode
        });

        // Close the database connection
        await closeDb()

        // Return the result
        return result   
    }
    catch(e){
        // Throw an error if there is any problem with the database connection or query
        throw new Error(e)
    }
}

// Function to update an existing billing address
const updateAddress= async (id,city,state,pincode) => {
    try{
        // Connect to database
        await connectionDb()

        // Update the document with the given id in the billingAddressmodel collection with the new city, state and pincode
        const result = await billingAddressmodel.findByIdAndUpdate(id,{city:city,state:state,pincode:pincode});

        // Close the database connection
        await closeDb()

        // Return the result
        return result   
    }
    catch(e){
        // Throw an error if there is any problem with the database connection or query
        throw new Error(e)
    }
}

// Function to delete a billing address by id
const deleteAddressById= async (id) => {
    try{
        // Connect to database
        await connectionDb()

        // Delete the document with the given id from the billingAddressmodel collection
        const result = await billingAddressmodel.findByIdAndDelete(id);

        // Close the database connection
        await closeDb()

        // Return the result
        return result   
    }
    catch(e){
        // Throw an error if there is any problem with the database connection or query
        throw new Error(e)
    }
}

// Function to delete all billing addresses
const deleteAllAddress= async () => {
    try{
        // Connect to database
        await connectionDb()

        // Delete all documents from the billingAddressmodel collection
        const result = await billingAddressmodel.deleteMany();

        // Close the database connection
        await closeDb()

        // Return the result
        return result   
    }
    catch(e){
      throw new Error(e)
    }
  }

  module.exports ={
    getAllAddress,
    getAddressById,
      addAddress,
      updateAddress,
      deleteAddressById,
      deleteAllAddress
  }