const {getCheckoutById,addCheckout} =require('./checkout')
const checkoutService = require('../../services/Checkout/checkout')
/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// Import necessary functions from checkout.js

// Define a route to get a checkout object by ID
const getCheckoutByIdRoute = async(request,response) => {
    try{
        // Extract the `id` parameter from the request URL
        const {id}=request.params;

        // Log the ID to the console for debugging purposes
        console.log(id)

        // Use the `getCheckoutById` function to retrieve the checkout object with the specified ID
        const result=  await getCheckoutById(id);

        // Log the result to the console for debugging purposes
        console.log(result)

        // Send the retrieved checkout object as the response
        response.send(result)
       
    }
    catch(e){
        // If an error occurs, log the error to the console and send the error as the response
        console.log(e);
        response.send(e)
    }
}

// Define a route to add a new checkout object
const addCheckoutRoute = async(request,response) => {    
    try{
        // Extract the `id` parameter from the request URL
        const {id}=request.params
        
        // Log the ID to the console for debugging purposes
        console.log({id})

        // Use the `addCheckout` function to add a new checkout object with the specified ID
        const result=  await addCheckout(id);

        // Log the result to the console for debugging purposes
        console.log(result)

        // Send the created checkout object as the response
        response.send(result)
       
    }
    catch(e){
        // If an error occurs, log the error to the console and send the error as the response
        console.log(e);
        response.send(e)
    }
}
//new

const findAllCheckouts = async (req, res) => {
    try {
        // find all checkout 
        const result = await checkoutService.findAllCheckouts()
        // return the response
        res.status(200).json(result)
    } catch (err) {
        // error case 
        res.status(400).json({ error: `Failed to fetch all checkouts : ${err.message}` })
    }
}

const checkOutByCart = async (req, res) => {
    try {
        // 
        const { order, payment, status } = req.body
        // find all checkout 
        const result = await checkoutService.checkOutByCart(order, payment, status)
        // return the response
        res.status(200).json(result)
    } catch (err) {
        // error case 
        res.status(400).json({ error: `Failed to fetch all checkout : ${err.message}` })
    }
}



// Export the two routes as properties of an object
module.exports = {
    getCheckoutByIdRoute,
    addCheckoutRoute,
    checkOutByCart,
    findAllCheckouts
} 
