/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// Importing the payment model functions from the payment.js file
const {
    getPaymentById,
    updatePaymentById,
    createPayment,
    getAllPayments,
    deletePaymentById,
    addPayment
} = require('./payment');

// Route to get payment information by ID
const getPaymentByIdRoute = async (request, response) => {
    try {
        // Get payment ID from URL parameters
        const { id } = request.params;
        console.log({ id });

        // Get payment data from database
        const result = await getPaymentById(id);
        console.log(result);

        // Send response with payment data
        response.send(result);
    }
    catch (e) {
        console.log(e);
        response.send(e);
    }
}

// Route to get payment information by ID
const getAllPaymentsRoute = async (request, response) => {
    try {
        // Get payment ID from URL parameters
        // const {id} = request.params;
        // console.log({id});

        // Get payment data from database
        const result = await getAllPayments();
        console.log(result);

        // Send response with payment data
        response.send(result);
    }
    catch (e) {
        console.log(e);
        response.send(e);
    }
}
// Route to create a new payment entry
const createPaymentRoute = async (request, response) => {
    try {
        // Get payment details from request body
        const { Amount, Method, productId, paymentStatus, customerId } = request.body;
        console.log({ Amount, Method, productId, paymentStatus });

        // Create new payment entry in database
        const result = await createPayment(Amount, Method, productId, paymentStatus, customerId);
        console.log(result);

        // Send response with newly created payment data
        response.send(result);
    }
    catch (e) {
        console.log(e);
        response.send(e);
    }
}

// Route to update payment information by ID
const updatePaymentByIdRoute = async (request, response) => {
    try {
        // Get payment ID and update details from request body
        const { id } = request.params;
        const { paymentStatus } = request.body;
        console.log(id);
        console.log(paymentStatus);

        // Update payment information in database
        const result = await updatePaymentById(id, paymentStatus);
        console.log(result);

        // Send response with updated payment data
        response.send(result);
    }
    catch (e) {
        console.log(e);
        response.send(e);
    }
}

// Route to update payment information by ID
const deletePaymentByIdRoute = async (request, response) => {
    try {
        // Get payment ID and update details from request body
        const { id } = request.params;
        console.log(id);


        // Update payment information in database
        const result = await deletePaymentById(id);
        console.log(result);

        // Send response with updated payment data
        response.send(result);
    }
    catch (e) {
        console.log(e);
        response.send(e);
    }
}
//new
const addPaymentRoute = async (req, res) => {
    try {
        const {order} = req.body
        //find all the products
        const result = await addPayment(order);
        //return the response
        console.log("")
        res.status(200).json(result);
    }
    catch (err) {
        //error case
        console.log("")
        res.status(400).json({ error: `Failed to create  payment : ${err}` })
    }
}
// Exporting the payment routes for use in other files
module.exports = {
    addPaymentRoute,
    getPaymentByIdRoute,
    createPaymentRoute,
    updatePaymentByIdRoute,
    getAllPaymentsRoute,
    deletePaymentByIdRoute
}
