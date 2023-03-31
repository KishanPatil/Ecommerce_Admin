/**
 * @author Kishan Patil
 */
// Importing the billingAddressmodel from billingAddressSchema file
const {adminmodel} = require("../../models/Admin/adminSchema");

// Importing connectionDb and closeDb functions from connection file
const {connectionDb,closeDb}=require("../../database/connection")

// Function to get all billing addresses
const getAllAdmin = async () => {
    try{
        // Connect to database
        await connectionDb()

        // Retrieve all documents from the billingAddressmodel collection
        const result = await adminmodel.find()

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
const getAdminById = async (id) => {
    try{
        // Connect to database
        await connectionDb()

        // Retrieve the document with the given id from the billingAddressmodel collection
        const result = await adminmodel.findById(id)

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
const createAdmin= async (fristname,lastname,phone,email,password,address) => {
    try{
        // Connect to database
        await connectionDb()

        // Create a new document in the billingAddressmodel collection with the given city, state and pincode
        const result = await adminmodel.create({
            fristname,lastname,phone,email,password,address
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
const updateAdmin= async (id,fristname,lastname,phone,email,password,address) => {
    try{
        // Connect to database
        await connectionDb()

        // Update the document with the given id in the billingAddressmodel collection with the new city, state and pincode
        const result = await adminmodel.findByIdAndUpdate(id,{fristname:fristname,lastname:lastname,phone:phone,email:email,password:password,address:address});

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
const deleteAdminById= async (id) => {
    try{
        // Connect to database
        await connectionDb()

        // Delete the document with the given id from the billingAddressmodel collection
        const result = await adminmodel.findByIdAndDelete(id);

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
const deleteAllAdmin= async () => {
    try{
        // Connect to database
        await connectionDb()

        // Delete all documents from the billingAddressmodel collection
        const result = await adminmodel.deleteMany();

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
      getAllAdmin,
      getAdminById,
      createAdmin,
      updateAdmin,
      deleteAdminById,
      deleteAllAdmin
  }