/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Product/productRoute')
// const service = require('../../services/Product/product')
/**
 * @description get all Products list by get method
 */
router.get("/getAllProducts", service.getAllProductsRoute);

/**
 * @description get Product list by get method
 */
router.get("/getProductById/:id", service.getProductByIdRoute);
/**
 * @description get Product list by get method
 */
router.get("/searchproductbyname/:name", service.searchProductByNameRoute);

/**
 * @description get Product by category ID
 */
router.get("/getProductByCategoryId/:id", service.getProductByCategoryIdRoute);

/**
 * @description get Product by brand ID
 */
router.get("/getproductbrandid/:id", service.getProductByBrandIdRoute);

/**
 * @description add product
 */
router.post("/addproduct", service.addProductRoute);

/**
 * @description add product
 */
router.put("/updateproduct/:id", service.updateProductRoute);


/**
 * @description add product
 */
router.delete("/deleteproductbyId/:id", service.deleteProductByIdRoute);


/**
 * @description add product
 */
router.delete("/deleteallproduct", service.deleteAllRoute);

module.exports = router;