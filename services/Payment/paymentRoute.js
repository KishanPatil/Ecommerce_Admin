// Importing the payment model functions from the payment.js file
const {getPaymentById, updatePayment, createPayment,getAllPayment,deletePayment} = require('./payment');

// Route to get payment information by ID
const getPaymentByIdRoute = async(request, response) => {
    try{
        // Get payment ID from URL parameters
        const {id} = request.params;
        console.log({id});

        // Get payment data from database
        const result = await getPaymentById(id);
        console.log(result);

        // Send response with payment data
        response.send(result);
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}

// Route to get payment information by ID
const getAllPaymentRoute = async(request, response) => {
    try{
        // Get payment ID from URL parameters
        // const {id} = request.params;
        // console.log({id});

        // Get payment data from database
        const result = await getAllPayment();
        console.log(result);

        // Send response with payment data
        response.send(result);
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}
// Route to create a new payment entry
const createPaymentRoute = async(request, response) => {
    try{
        // Get payment details from request body
        const {Amount, Method, productId,paymentStatus,customerId} = request.body;
        console.log({Amount, Method, productId,paymentStatus});

        // Create new payment entry in database
        const result = await createPayment(Amount, Method, productId,paymentStatus,customerId);
        console.log(result);

        // Send response with newly created payment data
        response.send(result);
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}

// Route to update payment information by ID
const updatePaymentRoute = async(request, response) => {
    try{
        // Get payment ID and update details from request body
        const {id} = request.params;
        const {paymentStatus} = request.body;
        console.log(id);
        console.log(paymentStatus);

        // Update payment information in database
        const result = await updatePayment(id, paymentStatus);
        console.log(result);

        // Send response with updated payment data
        response.send(result);
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}

// Route to update payment information by ID
const deletePaymentRoute = async(request, response) => {
    try{
        // Get payment ID and update details from request body
        const {id} = request.params;
        console.log(id);
        

        // Update payment information in database
        const result = await deletePayment(id);
        console.log(result);

        // Send response with updated payment data
        response.send(result);
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}
// Exporting the payment routes for use in other files
module.exports = {
    getPaymentByIdRoute,
    createPaymentRoute,
    updatePaymentRoute,
    getAllPaymentRoute,
    deletePaymentRoute
}
