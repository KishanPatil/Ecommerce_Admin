/**
* @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const billingAddressService = require('../../services/BillingAddress/BillingAddressRoute') 
/**
 * Route to Get all billing addresses.
 * HTTP Method: GET
 */
router.get("/billing-addresses", billingAddressService.getAllAddressRoute);
/**
 * Route to Get a billing address by ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Address item.
 */
router.get("/billing-addresses/:id", billingAddressService.getAddressByIdRoute);
/**
 * Route to Add a new billing address
 * HTTP Method: POST
 */
router.post("/billing-addresses", billingAddressService.addAddressRoute);
/**
 * Route to update a Billing Address item.
 * HTTP Method: PUT
 * @param {string} id - The ID of the Billing Address item to update.
 */
router.put("/billing-addresses/:id", billingAddressService.updateAddressByIdRoute);

/**
 * Route to Delete a Billing item.
 * HTTP Method: Delete
 * @param {string} id - The ID of the Billling Address item to Delete.
 */
router.delete("/billing-addresses/:id", billingAddressService.deleteAddressByIdRoute);
/**
 * Route to delete all billing addresses items.
 * HTTP Method: DELETE
 */
router.delete("/billing-addresses", billingAddressService.deleteAllAddressesRoute);

module.exports = router;
