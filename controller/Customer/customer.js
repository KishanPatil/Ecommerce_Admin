/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const customerService = require('../../services/Customer/customerRoute')
/**
 * Route to get all Customer list by get method.
 * HTTP Method: GET
 */
router.get("/customers", customerService.getAllCustomerRoute);

/**
 * Route to Get a customer by Email.
 * HTTP Method: GET
 */
router.get("/email", customerService.getCustomerByEmailRoute);

/**
 * Route to Get a customer by ID.
 * HTTP Method: GET
 */
// router.get("/customers/:customerid", customerService.getCustomerByIdRoute);

/**
 * Route .
 * HTTP Method: GET
 */
router.get("/getcustomerbyid/:id", customerService.getCustomerByIdRoute);

/**
 * Route to add Customer
 * HTTP Method: POST
 */
router.post("/customers", customerService.addCustomerRoute);

/**
 * @description Update the customer using ID
 */
/**
 * Route to Update the customer using ID
 * HTTP Method: PuT
 * @param {string} id - The ID of the customer item to update.
 */
router.put("/updatecustomersbyid/:id", customerService.updateCustomerByIdRoute);

/**
 * Route to Delete a Customter item.
 * HTTP Method: Delete
 * @param {string} id - The ID of the Customer item to Delete.
 */
router.delete("/customers/:id", customerService.deleteCustomerByIdRoute);
/**
 * Route to delete all customer items.
 * HTTP Method: DELETE
 */
router.delete("/customers", customerService.deleteAllRoute);

module.exports = router;