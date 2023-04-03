/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const { getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdminById,
    deleteAdminById,
    deleteAllAdmins } = require('./Admin')

/**
 * @description Get ALl  admin
 * @param {request} request 
 * @param {response} response 
 */const getAllAdminsRoute = async (request, response) => {
    try {
        const result = await getAllAdmins();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Get admin by id
 * @param {request} request 
 * @param {response} response 
 */
const getAdminByIdRoute = async (request, response) => {
    try {
        // Get the ID from the URL parameters
        const { id } = request.params;
        console.log({ id })
        const result = await getAdminById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Add admin
 * @param {request} request 
 * @param {response} response 
 */
const createAdminRoute = async (request, response) => {
    try {
        const { fristname, lastname, phone, email, password, address } = request.body;
        console.log({ fristname, lastname, phone, email, password, address })
        // Add the new document with the provided data
        const result = await createAdmin(fristname, lastname, phone, email, password, address);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Update admin
 * @param {request} request 
 * @param {response} response 
 */
const updateAdminByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const { city, state, pincode } = request.body;
        console.log(id)
        console.log(city, state, pincode)
        // Update the document with the provided data
        const result = await updateAdminById(id, city, state, pincode);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Delete admin by id 
 * @param {request} request 
 * @param {response} response 
 */
const deleteAdminByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id)
        // Delete the document with the specified ID
        const result = await deleteAdminById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description delete All admin
 * @param {request} request 
 * @param {response} response 
 */
const deleteAllAdminsRoute = async (request, response) => {
    try {
        // Delete all documents in the collection
        const result = await deleteAllAdmins();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

// Export all the Express.js routes as an object
module.exports = {
    getAllAdminsRoute,
    getAdminByIdRoute,
    createAdminRoute,
    updateAdminByIdRoute,
    deleteAdminByIdRoute,
    deleteAllAdminsRoute
}
