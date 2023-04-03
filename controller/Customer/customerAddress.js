/**
 * @author Meghana Chavanke
 */
const express = require('express');
var router = express.Router();
const customerAddressService = require('../../services/Customer/customerAddressRoute')

/**
 * @description get all Customer list by get method
 */
router.get("/", customerAddressService.getAllAddressRoute);

/**
 * @description get Products Brand by ID
 */
router.get("/:id", customerAddressService.getAddressByIdRoute);

/**
 * @description add Products 
 */
router.post("/", customerAddressService.addAddressRoute);

/**
 * @description update product brand by ID
 */
router.put("/:id", customerAddressService.updateAddressByIdRoute);

/**
 * @description delete Product brand by Id
 */
router.delete("/:id", customerAddressService.deleteAddressByIdRoute);

/**
 * @description delete all Product brand 
 */
router.delete("/", customerAddressService.deleteAllAddressRoute);

module.exports = router