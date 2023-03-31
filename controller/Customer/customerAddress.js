const express = require('express');
var router = express.Router();
const service = require('../../services/Customer/customerAddressRoute')

/**
 * @description get all Customer list by get method
 */
router.get("/getAllAddress", service.getAllAddressRoute);

/**
 * @description get Products Brand by ID
 */
router.get("/getAddressById/:id", service.getAddressByIdRoute);

/**
 * @description add Products 
 */
router.post("/addAddress", service.addAddressRoute);

/**
 * @description update product brand by ID
 */
router.put("/updateAddress/:id", service.updateAddressRoute);

/**
 * @description delete Product brand by Id
 */
router.delete("/deleteAddress/:id", service.deleteAddressByIdRoute);

/**
 * @description delete all Product brand 
 */
router.delete("/deleteAllAddress", service.deleteAllAddressRoute);

module.exports = router