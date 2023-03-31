const { paymentsmodel } = require("../../models/Payment/Payment");
const { connectionDb, closeDb } = require("../../database/connection");

/**
 * @description Get payment by id
 * @param {*} id 
 * @returns payment object
 */
const getPaymentById = async (id) => {
    try {
        // connect to database
        await connectionDb();
        // find payment by id
        const result = await paymentsmodel.findById(id).populate("productId");
        // close database connection
        await closeDb();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * @description Get payment by id
 * @param {*} id 
 * @returns payment object
 */
const getAllPayment = async (id) => {
    try {
        // connect to database
        await connectionDb();
        // find payment by id
        const result = await paymentsmodel.find().populate('productId');
        // close database connection
        await closeDb();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * @description Create new payment
 * @param {*} Amount 
 * @param {*} Method 
 * @param {*} productId 
 * @returns newly created payment object
 */
const createPayment = async (Amount, Method, productId,paymentStatus,customerId) => {
    try {
        // connect to database
        await connectionDb();
        // create new payment
        const result = await paymentsmodel.create({
            Amount,
            Method,
            productId,
            paymentStatus,
            customerId
        });
        // close database connection
        await closeDb();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * @description Update payment by id
 * @param {*} id 
 * @param {*} Method 
 * @returns updated payment object
 */
const updatePayment = async (id, paymentStatus) => {
    try {
        // connect to database
        await connectionDb();
        console.log(paymentStatus)
        // update payment with new method
        const result = await paymentsmodel.findByIdAndUpdate(id, { paymentStatus: paymentStatus });
        // close database connection
        await closeDb();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * @description Update payment by id
 * @param {*} id 

 * @returns delete payment object
 */
const deletePayment = async (id) => {
    try {
        // connect to database
        await connectionDb();
        // delete payment 
        const result = await paymentsmodel.findByIdAndDelete(id);
        // close database connection
        await closeDb();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    getPaymentById,
    updatePayment,
    createPayment,
    getAllPayment,
    deletePayment
}
