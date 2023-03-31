/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Cart/cartRoute');

/**
 * Route to get all Cart items.
 * HTTP Method: GET
 */
router.get("/getallcart", service.getAllCartRoute);

/**
 * Route to get a Cart item by ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.get("/getcartbyid/:id", service.getCartByIdRoute);

/**
 * Route to add a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Product to add to the Cart.
 */
router.post("/addcart/:id", service.addCartRoute);

/**
 * Route to update a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Cart item to update.
 */
router.put("/updatecart/:id", service.updateCartRoute);

/**
 * Route to update a Cart item.
 * HTTP Method: POST
 * @param {string} id - The ID of the Cart item to update.
 */
router.put("/updatequantity/:customerId/:productid/:quantity", service.updateCartQuantityRoute);

/**
 * Route to delete a Cart item by ID.
 * HTTP Method: DELETE
 * @param {string} id - The ID of the Cart item to delete.
 */
router.delete("/deletecartbyid/:id", service.deleteCartByIdRoute);

/**
 * Route to delete all Cart items.
 * HTTP Method: DELETE
 */
router.delete("/deleteallcart", service.deleteAllRoute);


/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.get("/getcartbycustomerid/:id", service.getCartByCustomerIdRoute);

/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.delete("/removefromcart/:customerId/:productid", service.removeProductFromCartRoute);

/**
 * Route to get a Cart item by customer ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Cart item.
 */
router.delete("/deletecartbycustomerid/:customerId", service.removeProductFromCartRoute1);
module.exports = router;
