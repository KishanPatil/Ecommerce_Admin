const express = require('express');
var router = express.Router();
const service = require('../../services/Order/orderRoute')
// const service = require('../../services/Product/product')
/**
 * @description get all order list by get method
 */
router.get("/getallorder", service.getAllOrderRoute);
/**
 * @description get order list by get method
 */
router.get("/getorderbyid/:id", service.getOrderByIdRoute);
/**
 * @description add order
 */
router.post("/addorder", service.addOrderRoute);
/**
 * @description update order
 */
router.put("/updateorder/:id", service.updateOrderRoute);
/**
 * @description delete order
 */
router.delete("/deleteorderbyid/:id", service.deleteOrderByIdRoute);
/**
 * @description delete all order
 */
router.delete("/deleteallorder", service.deleteAllRoute);

router.get("/getorderbycustomerid/:customerid", service.getOrderByCustomerIdRoute)

module.exports = router;