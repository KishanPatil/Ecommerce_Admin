/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// Import necessary functions from checkout.js
const {getCheckoutById,addCheckout} =require('./checkout')

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

// Export the two routes as properties of an object
module.exports = {
    getCheckoutByIdRoute,
    addCheckoutRoute
} 
