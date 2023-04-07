const express = require('express');
var router = express.Router();
const checkoutService = require('../../services/Checkout/checkoutRoute')
/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */


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



//new
router.get('/', checkoutService.findAllCheckouts)
router.post('/', checkoutService.checkOutByCart)
module.exports = router;