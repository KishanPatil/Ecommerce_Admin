
const {ordermodel} = require("../../models/Order/order");
const {connectionDb,closeDb}=require("../../database/connection")
const {removeProductFromCartRoute2}=require('../../services/Cart/cartRoute')
/**
 * @description get all orders
 * @returns {Promise<Array>} - Array of all orders in the database.
 */
const getAllOrder = async () => {
    try {
        // connect to the database
        await connectionDb();
        // retrieve all orders
        // const result = await ordermodel.find().populate("customerid").populate("BillingAddress").populate("payment").populate("productId");
        // close the database connection
        const result =  await ordermodel.find();
        await closeDb()
        return result
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * @description get an order by its ID
 * @param {string} id - The ID of the order to retrieve.
 * @returns {Promise<Object|null>} - The order with the specified ID, or null if not found.
 */
const getOrderById = async (id) => {
    try {
        // connect to the database
        await connectionDb()
        // retrieve the order with the specified ID
        const result = await ordermodel.findById(id).populate("customerid").populate("productId");
        // close the database connection
        await closeDb()
        return result
    } catch (e) {
        throw new Error(e)
    }
}


// Get order by customer ID 

const getOrderByCustomerId = async (customerid) => {
    try {
        // connect to the database
        await connectionDb()
        // retrieve the order with the specified ID
        // const result = await ordermodel.findById(id)
        const result = await ordermodel.find({ customerid: customerid }).populate("customerid").populate("productId");
        // close the database connection
        await closeDb()
        return result
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * @description add a new order to the database
 * @param {string} status - The status of the new order.
 * @param {string} BillingAddress - The billing address for the new order.
 * @param {string} payment - The payment information for the new order.
 * @param {string} productId - The ID of the product associated with the new order.
 * @returns {Promise<Object>} - The newly created order object.
 */


// customerid, status, street, city, State, pin, payment,productId
const addOrder = async (customerid, status, street, city, State, pin, payment, quantity ,productId) => {
    try {
        // connect to the database
        await connectionDb()
        // create a new order with the specified properties
        const result = await ordermodel.create({
            customerid,
            status,
            street,
            city,
            State,
            pin,
            payment,
            quantity,
            productId
        });
        // close the database connection
        await removeProductFromCartRoute2(customerid, productId)
        await closeDb()
        return result
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * @description update an existing order in the database
 * @param {string} id - The ID of the order to update.
 * @param {string} status - The new status for the order.
 * @param {string} BillingAddress - The new billing address for the order.
 * @param {string} payment - The new payment information for the order.
 * @param {string} productId - The new product ID for the order.
 * @returns {Promise<Object>} - The updated order object.
 */
const updateOrder = async (id) => {
    try {
        await connectionDb();
      const filter = { _id: id };
      const update = { status: "canceled" };
      //   const result = await ordermodel.updateOne(filter, update);
      const result = await ordermodel.updateOne({_id: id}, {$set:{status:"canceled"}})
      console.log(result);
      await closeDb()
    } catch (error) {
      console.log(error);
    }
  };

/**
 * @description delete an order by its ID
 * @param {string} id - The ID of the order to delete.
 * @returns {Promise<Object>} - The deleted order object.
 */
const deleteOrderById = async (id) => {
    try {
        // connect to the database
        await connectionDb()
        // find the order with the specified ID and delete it
        const result = await ordermodel.findByIdAndDelete(id);
                await closeDb()
                return result   
              }
          catch(e){
            throw new Error(e)
          }
 }
/**
 * @description delete an order 
 * @param {string} id - The ID of the order to delete.
 * @returns {Promise<Object>} - The deleted order object.
 */
 const deleteAllOrder= async () => {
  try{
      // connection
        await connectionDb()
      //   delete ALl br
        const result = await ordermodel.deleteMany();
        await closeDb()
        return result   
      }
  catch(e){
    throw new Error(e)
  }
}
 //exporting function
 module.exports =  {
  getAllOrder,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrderById,
  deleteAllOrder,
  getOrderByCustomerId
}