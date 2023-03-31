/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/BillingAddress/BillingAddressRoute') 
/**
 * Route to Get all billing addresses.
 * HTTP Method: GET
 */
router.get("/getAllAddress", service.getAllAddressRoute);
/**
 * Route to Get a billing address by ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Address item.
 */
router.get("/getAddressById/:id", service.getAddressByIdRoute);
/**
 * Route to Add a new billing address
 * HTTP Method: POST
 */
router.post("/addAddress", service.addAddressRoute);
/**
 * Route to update a Billing Address item.
 * HTTP Method: PUT
 * @param {string} id - The ID of the Billing Address item to update.
 */
router.put("/updateAddress/:id", service.updateAddressRoute);

/**
 * Route to Delete a Billing item.
 * HTTP Method: Delete
 * @param {string} id - The ID of the Billling Address item to Delete.
 */
router.delete("/deleteAddress/:id", service.deleteAddressByIdRoute);
/**
 * Route to delete all billing addresses items.
 * HTTP Method: DELETE
 */
router.delete("/deleteAllAddress", service.deleteAllAddressRoute);

module.exports = router;
