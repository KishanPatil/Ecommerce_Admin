/**
* @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const cartservice = require('../../services/Cart/cartRoute');

const verifyToken = require('../../JWTfiles/auth')

/**
 * Route to get all Cart items.
 * HTTP Method: GET
 */
router.get("/cart", cartservice.getAllCartRoute);

/**
 * Route to get a Cart item by ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.get("/cart/:id", cartservice.getCartByIdRoute);

/**
 * Route to add a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Product to add to the Cart.
 */
router.post("/cart/:id", cartservice.addCartRoute);

/**
 * Route to update a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Cart item to update.
 */
router.put("/cart/:id", cartservice.updateCartRoute);

/**
 * Route to update a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Cart item to update.
 */
router.put("/updatequantity/:customerId/:productid/:quantity", cartservice.updateCartQuantityRoute);

/**
 * Route to delete a Cart item by ID.
 * HTTP Method: DELETE
 * @param {string} id - The ID of the Cart item to delete.
 */
router.delete("/cart/:id", cartservice.deleteCartByIdRoute);

/**
 * Route to delete all Cart items.
 * HTTP Method: DELETE
 */
router.delete("/cart", cartservice.deleteAllCartRoute);


/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.get("/getcartbycustomerid/:id",verifyToken, cartservice.getCartByCustomerIdRoute);

/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.delete("/removefromcart/:customerid/:productid", cartservice.removeProductFromCartRoute);

/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.delete("/deletecartbycustomerid/:customerid", cartservice.removeProductFromCartRoute1);


module.exports = router;
