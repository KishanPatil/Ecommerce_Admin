const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import controllers
const ProductController = require('./controller/Product/product');
const productBrandController = require('./controller/Product/productBrand');
const productCategoryController = require('./controller/Product/productCategory');
const customerController = require('./controller/Customer/customer');
const customerAddressController = require('./controller/Customer/customerAddress');
const cartController = require('./controller/Cart/cart');
const billingAddressController = require('./controller/BillingAddress/billingAddress');
const checkoutController = require('./controller/Checkout/checkout');
const paymentController = require('./controller/Payment/payment');
const orderController = require('./controller/Order/order');
const adminController = require('./controller/Admin/admin');

// Import database connection
const { connectionDb } = require('./database/connection');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader(
'Access-Control-Allow-Headers',
'Origin, X-Requested-With, Content-Type, Accept, Authorization'
);

res.setHeader(
'Access-Control-Allow-Methods',
'GET, POST, PATCH, DELETE, OPTIONS'
);
next();
});

// Product controller
app.use('/product', ProductController);

// Product brand controller
app.use('/brand', productBrandController);

// Product category controller
app.use('/category', productCategoryController);

/**

@description Customer address controller
*/
app.use('/address', customerAddressController);
/**

@description Customer controller
*/
app.use('/customer', customerController);
/**

@description Cart controller
*/
app.use('/cart', cartController);
/**

@description Billing address controller
*/
app.use('/billingAddress', billingAddressController);
/**

@description Checkout controller
*/
app.use('/checkout', checkoutController);
/**

@description Payment controller
*/
app.use('/payment', paymentController);
/**

@description Order controller
*/
app.use('/order', orderController);
/**

@description Admin controller
*/
app.use('/admin', adminController);
/**

@description Port number
*/
app.listen(3009, () => {
console.log('Express server started at port: 3009');
});























// // This is your test secret API key.


// // app.use(express.static("public"));


// /**
//  * @description Product controller
//  */ 
// const ProductController= require('./controller/Product/product')
// const productBrandcontroller=require('./controller/Product/productBrand')
// const productCategorycontroller=require('./controller/Product/productCategory')

// /**
//  * @description customer controller
//  */
// const customercontroller=require('./controller/Customer/customer')
// const customerAddresscontroller=require('./controller/Customer/customerAddress')

// /**
//  * @description Cart controller
//  */
// const cartcontroller=require('./controller/Cart/cart')

// /**
//  * @description Billing Address controller
//  */
// const billingAddresscontroller=require('./controller/BillingAddress/billingAddress')


// /**
//  * @description Bcheckout controller
//  */
// const checkoutcontroller=require('./controller/Checkout/checkout')

// /**
//  * @description payment controller
//  */
// const paymentcontroller=require('./controller/Payment/payment')

// /**
//  * @description order controller
//  */
// const ordercontroller=require('./controller/Order/order')

// /**
//  * @description admin controller
//  */
// const admincontroller=require('./controller/Admin/admin')


// const express = require('express')
// const bodyParser = require('body-parser')
// const connect=require("./database/connection")
// const {connectionDb}=require("./database/connection")
// const { checkout } = require('./controller/Product/product')

// var app = express();
// var cors = require('cors');
// app.use(cors())

// app.use( bodyParser.json());
// app.use( bodyParser.urlencoded( { extended:true } ) );

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );

//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'GET, POST, PATCH, DELETE, OPTIONS'
//     );
//     next();
// })

// // product controller
// app.use('/product', ProductController);

// // product brand controller
// app.use('/brand',productBrandcontroller)

// // product brand controller
// app.use('/category',productCategorycontroller)

// /**
//  * @description Customer Address Controller
//  */
// app.use('/address',customerAddresscontroller)

// /**
//  * @description Customer Controller
//  */
// app.use('/customer',customercontroller)


// /**
//  * @description Cart Controller
//  */
// app.use('/cart',cartcontroller)

// /**
//  * @description billing Address Controller
//  */
// app.use('/billingAddress',billingAddresscontroller)

// /**
//  * @description checkout Controller
//  */
// app.use('/checkout',checkoutcontroller)

// /**
//  * @description payment Controller
//  */
// app.use('/payment',paymentcontroller)

// /**
//  * @description order Controller
//  */
// app.use('/order',ordercontroller)

// /**
//  * @description admin Controller
//  */
// app.use('/admin',admincontroller)

// /**
//  * @description Port number 
//  */
// app.listen(3009, () => {
//     console.log('Express server started at port : 3009');
// });

