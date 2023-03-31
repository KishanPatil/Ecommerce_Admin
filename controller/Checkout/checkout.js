/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Checkout/checkoutRoute')


/**
 * Route to Get cheout by id.
 * HTTP Method: GET
 */
router.get("/getcheckoutbyid/:id", service.getCheckoutByIdRoute);

/**
* Route to add checkout by ID.
* HTTP Method: Post
* @param {string} id - The ID of the cheout item.
 */
router.post("/addcheckout/:id", service.addCheckoutRoute);

module.exports = router;