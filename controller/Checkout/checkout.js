/**
 * @author Meghana Chavanke
 */
const express = require('express');
var router = express.Router();
const checkoutService = require('../../services/Checkout/checkoutRoute')


/**
 * Route to Get cheout by id.
 * HTTP Method: GET
 */
router.get("/checkout/:id", checkoutService.getCheckoutByIdRoute);

/**
* Route to add checkout by ID.
* HTTP Method: Post
* @param {string} id - The ID of the cheout item.
 */
router.post("/checkout/:id", checkoutService.addCheckoutRoute);

module.exports = router;