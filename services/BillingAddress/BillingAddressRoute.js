/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const { getAllAddresses,
    getAddressById,
    addAddress,
    updateAddressById,
    deleteAddressById,
    deleteAllAddresses } = require('./BillingAddress')

/**
 * @description Get ALl  Address
 * @param {request} request 
 * @param {response} response 
 */const getAllAddressRoute = async (request, response) => {
    try {
        const result = await getAllAddresses();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Get Address by id
 * @param {request} request 
 * @param {response} response 
 */
const getAddressByIdRoute = async (request, response) => {
    try {
        // Get the ID from the URL parameters
        const { id } = request.params;
        console.log({ id })
        const result = await getAddressById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Add Address
 * @param {request} request 
 * @param {response} response 
 */
const addAddressRoute = async (request, response) => {
    try {
        const { city, state, pincode } = request.body;
        console.log({ city, state, pincode })
        // Add the new document with the provided data
        const result = await addAddress(city, state, pincode);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Update Address
 * @param {request} request 
 * @param {response} response 
 */
const updateAddressByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const { city, state, pincode } = request.body;
        console.log(id)
        console.log(city, state, pincode)
        // Update the document with the provided data
        const result = await updateAddressById(id, city, state, pincode);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Delete Address by id 
 * @param {request} request 
 * @param {response} response 
 */
const deleteAddressByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id)
        // Delete the document with the specified ID
        const result = await deleteAddressById(id);
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description delete All Address
 * @param {request} request 
 * @param {response} response 
 */
const deleteAllAddressesRoute = async (request, response) => {
    try {
        // Delete all documents in the collection
        const result = await deleteAllAddresses();
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
    getAllAddressRoute,
    getAddressByIdRoute,
    addAddressRoute,
    updateAddressByIdRoute,
    deleteAddressByIdRoute,
    deleteAllAddressesRoute
}
