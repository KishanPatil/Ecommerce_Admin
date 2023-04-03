/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const orderService = require('../../services/Order/orderRoute')
// const service = require('../../services/Product/product')
/**
 * @description get all order list by get method
 */
router.get("/orders", orderService.getAllOrderRoute);
/**
 * @description get order list by get method
 */
router.get("/orders/:id", orderService.getOrderByIdRoute);
/**
 * @description add order
 */
router.post("/orders", orderService.addOrderRoute);

router.get("/getordersbycustomerid/:customerid", orderService.getOrderByCustomerIdRoute)
/**
 * @description update order
 */
router.put("/orders/:id", orderService.updateOrderRoute);
/**
 * @description delete order
 */
router.delete("/orders/:id", orderService.deleteOrderByIdRoute);


/**
 * @description delete all order
 */
router.delete("/orders", orderService.deleteAllRoute);



module.exports = router;