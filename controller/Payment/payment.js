const express = require('express');
var router = express.Router();
const service = require('../../services/Payment/paymentRoute')

/**
 * @description get a Payment by ID
 */
router.get("/getPaymentById/:id", service.getPaymentByIdRoute);
/**
 * @description get Products Payment 
 */
router.get("/getAllPayment", service.getAllPaymentRoute);
/**
 * @description add Products Payment
 */
router.post("/createPayment", service.createPaymentRoute);

/**
 * @description update product brand by ID
 */
router.put("/updatePayment/:id", service.updatePaymentRoute);

/**
 * @description update product brand by ID
 */
router.delete("/deleteByid/:id", service.deletePaymentRoute);


module.exports = router