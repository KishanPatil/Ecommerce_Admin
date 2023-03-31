/**
 * @author Kishan Patil
 */
const { getAllCustomer, getCustomerById,getCustomerByEmail, addCustomer, updateCustomer, deleteCustomerById, deleteAllCustomer,otpGeneratorbyemail } = require('./customer')
// Route to get all customers
const getAllCustomerRoute = async (request, response) => {
    try {
        const result = await getAllCustomer();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Route to get a customer by ID
const getCustomerByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await getCustomerById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

const getCustomerByEmailRoute = async (request, response) => {
    try {
        const { email } = request.params;
        const result = await getCustomerByEmail(email);
        response.status(200).json(result)
    }
    catch {
        response.status(400).json({ error: 'Error while getting the customer by mail' })
    }
}

// Route to add a new customer
const addCustomerRoute = async (request, response) => {
    try {
        const { fname, lname, phone, email, password, city, state, pincode } = request.body
        console.log({ fname, lname, phone, email, password, city, state, pincode })
        const result = await addCustomer(fname, lname, phone, email, password, city, state, pincode);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Route to update a customer by ID
const updateCustomerRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const { fame, lname, phone, email, password, city, state, pincode } = request.body;
        console.log(id)
        const result = await updateCustomer(id, fame, lname, phone, email, password, city, state, pincode);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Route to delete a customer by ID
const deleteCustomerByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id)
        const result = await deleteCustomerById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Route to delete all customers
const deleteAllRoute = async (request, response) => {
    try {
        const result = await deleteAllCustomer();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
// Route to delete all customers
const otpGeneratorbyemailRoute = async (request, response) => {
    try {
        const { email } = request.body;
        console.log(email)
        const result = await otpGeneratorbyemail(email);
        console.log("this is route ",result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Exporting all the routes
module.exports = {
    getAllCustomerRoute,
    getCustomerByIdRoute,
    getCustomerByEmailRoute,
    addCustomerRoute,
    updateCustomerRoute,
    deleteCustomerByIdRoute,
    deleteAllRoute,
    otpGeneratorbyemailRoute
}
