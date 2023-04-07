const { paymentsmodel } = require("../../models/Payment/Payment");
const { connectionDb, closeDb } = require("../../database/connection");
const {} = require("../Order/order")
const stripe = require("stripe")('sk_test_51MrHZkSBXFZ8OGxdMftdBF6RH6mczqENBQddufgTNKcMkS1sW2WLHIzmGoRBMAg2swVcrydaTCImYAgYk0H3XUdO00Z6Yg4kxe');
const { Order } = require('../../models/Order/order')
const { cartmodel } = require('../../models/Cart/cartSchema')
/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */

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
const getAllPayments = async (id) => {
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
const updatePaymentById = async (id, paymentStatus) => {
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
const deletePaymentById = async (id) => {
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

//Payment gateway
//const stripe = require("stripe")('sk_test_51Mt6nxSGE2olbbFYgKKY8VJMv075vMdJgBgRPIaz7Fr57WeofcGZvR2iwayFsP0nmuweJkIGKkY1hYU5WLLtHVGR00UclZ9Ozc');

const calculateTotal = (products) => {
    let total = 0

    products.forEach(product => {
        total += Number(product.quantity * product.productId.price)
    })

    return total
}
const addPayment = async (cartid, total) => {
    try {
        await connectionDb()
        //get the input
        console.log('payment ====> ', cartid)
        const currentOrder = await cartmodel.findById(cartid).populate("products")
        // const total = calculateTotal(currentOrder.products)
        // const result = await Payment.create({ order, amount: total })
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total * 100,
            currency: "inr",
            automatic_payment_methods: {
                enabled: true,
            },
        });
        await closeDb()
        //return result
        console.info('payment method created successfully')
        return { clientSecret: paymentIntent.client_secret }
    } catch (err) {
        //error case
        console.log(err)
        throw new Error(err)
    }
}   
module.exports = {
    addPayment,
    getPaymentById,
    updatePaymentById,
    createPayment,
    getAllPayments,
    deletePaymentById
}
