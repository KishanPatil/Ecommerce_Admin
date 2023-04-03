/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const { getAllCart,
    getCartById,
    addCart,
    updateCart,
    deleteCartById,
    deleteAllCart,
    getCartByCustomerId,
    removeProductFromCart,
    updateCartQuantity,
    removeProductFromCart1,
    removeProductFromCartbyProductId } = require('./cart')

/**
 * @description Get ALl  cart
 * @param {request} request 
 * @param {response} response 
 */
const getAllCartRoute = async (request, response) => {
    try {
        const result = await getAllCart();
        console.log(result)
        response.send(result)
    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description get cart by Id 
 * @param {request} request 
 * @param {response} response 
 */
const getCartByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        //getting data 
        const result = await getCartById(id);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description update cart 
 * @param {request} request 
 * @param {response} response 
 */
const addCartRoute = async (request, response) => {

    try {
        const { id } = request.params;
        const { products } = request.body
        console.log(id, products)
        //getting data 
        const result = await addCart(id, products);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description update cart 
 * @param {request} request 
 * @param {response} response 
 */
const updateCartRoute = async (request, response) => {

    try {
        const { id } = request.params;
        const { customerId, products } = request.body
        //update data 
        const result = await updateCart(id, customerId, products);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}
/**
 * @description Delete cart by id
 * @param {request} request 
 * @param {response} response 
 */
const deleteCartByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id)
        const result = await deleteCartById(id);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description delete all cart
 * @param {request} request 
 * @param {response} response 
 */
const deleteAllCartRoute = async (request, response) => {

    try {
        //delete All Cart 
        const result = await deleteAllCart();
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}


/**
 * @description Delete cart by id
 * @param {request} request 
 * @param {response} response 
 */
const getCartByCustomerIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id)
        const result = await getCartByCustomerId(id);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description Delete cart by id
 * @param {request} request 
 * @param {response} response 
 */
const removeProductFromCartRoute = async (request, response) => {
    try {
        const { customerId, productid } = request.params;
        console.log(customerId, productid)
        const result = await removeProductFromCart(customerId, productid);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description Delete cart by id
 * @param {request} request 
 * @param {response} response 
 */
const removeProductFromCartRoute1 = async (request, response) => {
    try {
        const { customerId } = request.params;
        console.log(customerId)
        const result = await removeProductFromCart1(customerId);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * @description update cart 
 * @param {request} request 
 * @param {response} response 
 */
const updateCartQuantityRoute = async (request, response) => {

    try {
        const { customerId, productid, quantity } = request.params;
        // const {customerId,products}=request.body            
        //update data 
        const result = await updateCartQuantity(customerId, productid, quantity);
        console.log(result)
        response.send(result)

    }
    catch (e) {
        console.log(e);
        response.send(e)
    }
}

/**
 * 
 * @param {request } request 
 * @param {request } response 
 */
const removeProductFromCartByProductId = async (request, response) => {
    try {
        const customerid = request.params.customerid;
        const productId = request.params.productId;
        const result = await removeProductFromCartbyProductId(customerid, productId);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
}
module.exports = {
    getAllCartRoute,
    getCartByIdRoute,
    addCartRoute,
    updateCartRoute,
    deleteCartByIdRoute,
    deleteAllCartRoute,
    getCartByCustomerIdRoute,
    removeProductFromCartRoute,
    updateCartQuantityRoute,
    removeProductFromCartRoute1,
    removeProductFromCartByProductId
}