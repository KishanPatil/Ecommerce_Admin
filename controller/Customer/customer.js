/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Customer/customerRoute')
/**
 * Route to get all Customer list by get method.
 * HTTP Method: GET
 */
router.get("/getallcustomers", service.getAllCustomerRoute);
/**
 * Route to Get a customer by ID.
 * HTTP Method: GET
 */
router.get("/getcustomerbyid/:id", service.getCustomerByIdRoute);

/**
 * Route to Get a customer by ID.
 * HTTP Method: GET
 */
router.get("/getcustomerbyemail/:email", service.getCustomerByEmailRoute);
/**
 * Route .
 * HTTP Method: GET
 */
router.get("/login/:id", service.getCustomerByIdRoute);
/**
 * Route to add Customer
 * HTTP Method: POST
 */
router.post("/addcustomer", service.addCustomerRoute);

/**
 * @description Update the customer using ID
 */
/**
 * Route to Update the customer using ID
 * HTTP Method: PuT
 * @param {string} id - The ID of the customer item to update.
 */
router.put("/updatecustomer/:id", service.updateCustomerRoute);

/**
 * Route to Delete a Customter item.
 * HTTP Method: Delete
 * @param {string} id - The ID of the Customer item to Delete.
 */
router.delete("/deletecustomerbyId/:id", service.deleteCustomerByIdRoute);
/**
 * Route to delete all customer items.
 * HTTP Method: DELETE
 */
router.delete("/deleteallcustomer", service.deleteAllRoute);

/**
 * Route to generate otp all customer items.
 * HTTP Method: post
 */
router.post("/otpgenerate", service.otpGeneratorbyemailRoute);

module.exports = router;