// Importing functions from order.js file
const {getAllOrder,
    getOrderById,
    getOrderByCustomerId,      //updated
    addOrder,
    updateOrder,
    deleteOrderById,
    deleteAllOrder} =require('./order')

// Route for getting all orders
const  getAllOrderRoute = async(request,response) => {
 try{
     const result=  await getAllOrder();
     console.log(result)
     response.send(result)
 }
 catch(e){
     console.log(e);
     response.send(e)
 }
}

// Route for getting order by ID
const  getOrderByIdRoute = async(request,response) => {
 try{
     const {id}=request.params;
     // Getting data
     const result=  await getOrderById(id);
     console.log(result)
     response.send(result)       
 }
 catch(e){
     console.log(e);
     response.send(e)
 }
}

//get order by customer ID

const  getOrderByCustomerIdRoute = async(request,response) => {         // Added
    try{
        const {customerid}=request.params;
        // Getting data
        const result=  await getOrderByCustomerId(customerid);
        console.log(result)
        response.send(result)       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
   }

// Route for adding a new order
const  addOrderRoute = async(request,response) => {
 try{
     const {customerid, status, street, city, State, pin, payment, quantity,productId}=request.body
     console.log({customerid, status, street, city, State, pin, payment, quantity ,productId})
     // Adding data
     const result=  await addOrder(customerid, status, street, city, State, pin, payment,quantity,productId);
     console.log(result)
     response.send(result)
 }
 catch(e){
     console.log(e);
     response.send(e)
 }
}

// Route for updating an order
const updateOrderRoute = async(request, response) => {
    try{
        const {id}=request.params;
        const result = await updateOrder(id);
        console.log(result);
        response.send("updated");
    }
    catch(e){
        console.log(e);
        response.send(e);
    }
}

// Route for deleting an order by ID
const  deleteOrderByIdRoute = async(request,response) => {
 try{
     const {id}=request.params;
     console.log(id)
     // Deleting data
     const result=  await deleteOrderById(id);
     console.log(result)
     response.send(result)       
 }
 catch(e){
     console.log(e);
     response.send(e)
 }
}

// Route for deleting all orders
const  deleteAllRoute = async(request,response) => {
 try{
     // Deleting all data
     const result=  await deleteAllOrder();
     console.log(result)
     response.send(result)       
 }
 catch(e){
     console.log(e);
     response.send(e)
 }
}

// Exporting route functions
module.exports = {
 getAllOrderRoute,
 getOrderByIdRoute,
 addOrderRoute,
 updateOrderRoute,
 deleteOrderByIdRoute,
 deleteAllRoute,
 getOrderByCustomerIdRoute
}
