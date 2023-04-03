/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// Importing functions from the customerAddress module
const {getAllAddresses,getAddressById,addAddress,updateAddressById,deleteAddressById,deleteAllAddresses} =require('./customerAddress')

// Route for getting all addresses
const  getAllAddressRoute = async(request,response) => {
    try{
        const result=  await getAllAddresses();
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Route for getting an address by ID
const  getAddressByIdRoute = async(request,response) => {
    try{
        // Get the ID from the URL or request parameters
        const {id}=request.params;
        console.log({id})
        const result=  await getAddressById(id);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Route for adding a new address
const  addAddressRoute = async(request,response) => {
    try{
        // Get the data from the request body
        const {city,state,pincode}=request.body;
        console.log({city,state,pincode})
        // Add the new address
        const result=  await addAddress(city,state,pincode);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Route for updating an existing address
const  updateAddressByIdRoute = async(request,response) => {
    try{
        // Get the ID and data from the request parameters and body
        const {id}=request.params;
        const {city,state,pincode}=request.body;
        console.log(id)
        console.log(city,state,pincode)
        // Update the address
        const result=  await updateAddressById(id,city,state,pincode);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Route for deleting an address by ID
const  deleteAddressByIdRoute = async(request,response) => {
    try{
        // Get the ID from the request parameters
        const {id}=request.params;
        console.log(id)
        // Delete the address
        const result=  await deleteAddressById(id);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Route for deleting all addresses
const  deleteAllAddressRoute = async(request,response) => {
    try{
        // Delete all addresses
        const result=  await deleteAllAddresses();
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

// Exporting the route functions
module.exports={
    getAllAddressRoute,
    getAddressByIdRoute,
    addAddressRoute,
    updateAddressByIdRoute,
    deleteAddressByIdRoute,
    deleteAllAddressRoute
}
