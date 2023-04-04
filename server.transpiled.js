"use strict";

/**
 * @description Product controller
 */
var ProductController = require('./controller/Product/product');
var productBrandcontroller = require('./controller/Product/productBrand');
var productCategorycontroller = require('./controller/Product/productCategory');

/**
 * @description customer controller
 */
var customercontroller = require('./controller/Customer/customer');
var customerAddresscontroller = require('./controller/Customer/customerAddress');

/**
 * @description Cart controller
 */
var cartcontroller = require('./controller/Cart/cart');

/**
 * @description Billing Address controller
 */
var billingAddresscontroller = require('./controller/BillingAddress/billingAddress');

/**
 * @description Bcheckout controller
 */
var checkoutcontroller = require('./controller/Checkout/checkout');

/**
 * @description payment controller
 */
var paymentcontroller = require('./controller/Payment/payment');

/**
 * @description order controller
 */
var ordercontroller = require('./controller/Order/order');

/**
 * @description admin controller
 */
var admincontroller = require('./controller/Admin/admin');
var express = require('express');
var bodyParser = require('body-parser');
var connect = require("./database/connection");
var _require = require("./database/connection"),
  connectionDb = _require.connectionDb;
var _require2 = require('./controller/Product/product'),
  checkout = _require2.checkout;
var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

// product controller
app.use('/product', ProductController);

// product brand controller
app.use('/brand', productBrandcontroller);

// product brand controller
app.use('/category', productCategorycontroller);

/**
 * @description Customer Address Controller
 */
app.use('/address', customerAddresscontroller);

/**
 * @description Customer Controller
 */
app.use('/customer', customercontroller);

/**
 * @description Cart Controller
 */
app.use('/cart', cartcontroller);

/**
 * @description billing Address Controller
 */
app.use('/billingAddress', billingAddresscontroller);

/**
 * @description checkout Controller
 */
app.use('/checkout', checkoutcontroller);

/**
 * @description payment Controller
 */
app.use('/payment', paymentcontroller);

/**
 * @description order Controller
 */
app.use('/order', ordercontroller);

/**
 * @description admin Controller
 */
app.use('/admin', admincontroller);

/**
 * @description Port number 
 */
app.listen(3009, function () {
  console.log('Express server started at port : 3009');
});
