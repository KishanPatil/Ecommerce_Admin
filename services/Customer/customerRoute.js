/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const jwt = require('jsonwebtoken')
const secretkey = 'shhh123'
const { getAllCustomers, getCustomerById, getCustomerByEmail, addCustomer, updateCustomerById, deleteCustomerById, deleteAllCustomers,otpGeneratorbyemail } = require('./customer')
// Route to get all customers
const getAllCustomerRoute = async (request, response) => {
    try {
        const result = await getAllCustomers();
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
        const { email , password } = request.query;
        console.log('...')
        const result = await getCustomerByEmail(email, password);
        response.status(200).json(result)
    }
    catch(e){
        response.status(400).json(e)
    }
}

// const getCustomerByEmailRoute = async (request, response) => {
//     try {
//         const { email } = request.params;
//         //Check if email is there or not 
//         if (!(email)) {
//             response.status(400).send('Enter your email id')
//         }
//         //checking if email is present in backend
//         const result = await getCustomerByEmail(email);
       
//         //creating token
//         let token = null;
//         if (result) {
//             token = jwt.sign(
//                 {
//                     result_id: result._id,
//                     email
//                 },
//                 secretkey,
//                 {
//                     expiresIn: '500s'
//                 }, (error, token) => {
//                     result.token = token;
//                     response.json({
//                         result
//                     })
//                 });

//         }
//         else {
//             response.status(200).json("else part")
//         }

//     } catch {
//         response.status(400).json({ error: 'Error while getting the token' })
//     }
// }

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
const updateCustomerByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const { fame, lname, phone, email, password, city, state, pincode } = request.body;
        console.log(id)
        const result = await updateCustomerById(id, fame, lname, phone, email, password, city, state, pincode);
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
        const result = await deleteAllCustomers();
        console.log(result)
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
    updateCustomerByIdRoute,
    deleteCustomerByIdRoute,
    deleteAllRoute,
}
