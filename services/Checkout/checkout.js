/**
 * @author Kishan Patil
 */
// Require necessary dependencies
const {checkoutmodel} = require("../../models/Checkout/checkout");
const {connectionDb,closeDb}=require("../../database/connection")

/**
 * @description get products by Id
 * @param {*} id 
 * @returns {Promise} - Returns a Promise that resolves to the retrieved checkout object
 */
const getCheckoutById=async (id) => {
  try{
        // Connect to the database
        await connectionDb()

        // Use Mongoose's `findById` method to retrieve a checkout object with the specified `id`
        const result = await checkoutmodel.findById(id)

        // Close the database connection
        await closeDb()

        // Return the retrieved checkout object
        return result
      }
  catch(e){
    // If an error occurs, throw a new Error object with the error message
    throw new Error(e)
  }
}
  
/**
 * @description Add a checkout object to the database
 * @param {*} id - The ID of the checkout object to add
 * @returns {Promise} - Returns a Promise that resolves to the created checkout object
 */
const addCheckout= async (id) => {
  try{
        // Connect to the database
        await connectionDb()

        // Use Mongoose's `create` method to create a new checkout object with the specified `id`
        const result = await checkoutmodel.create({
          id
        });

        // Close the database connection
        await closeDb()

        // Return the created checkout object
        return result        
      }
  catch(e){
    // If an error occurs, throw a new Error object with the error message
    throw new Error(e)
  }
}

// Export the two functions as properties of an object
module.exports =  {
  getCheckoutById,
  addCheckout
} 
