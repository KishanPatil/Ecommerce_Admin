/**
* @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const paymentService = require('../../services/Payment/paymentRoute')

/**
 * @description get a Payment by ID
 */
router.get("/payments/:id", paymentService.getPaymentByIdRoute);
/**
 * @description get Products Payment 
 */
router.get("/payments", paymentService.getAllPaymentsRoute);
/**
 * @description add Products Payment
 */
router.post("/payments", paymentService.createPaymentRoute);

/**
 * @description update product brand by ID
 */
router.put("/payments/:id", paymentService.updatePaymentByIdRoute);

/**
 * @description update product brand by ID  
 */
router.delete("/payments/:id", paymentService.deletePaymentByIdRoute);

//new
router.post('/', paymentService.addPaymentRoute)
module.exports = router