/**
 * @author Meghana Chavanke
 */
const express = require('express');
var router = express.Router();
const productService = require('../../services/Product/productRoute')
// const service = require('../../services/Product/product')
/**
 * @description get all Products list by get method
 */
router.get("/products", productService.getAllProductsRoute);

/**
 * @description get Product list by get method
 */
router.get("/products/:id", productService.getProductByIdRoute);

/**
 * @description get Product list by get method
 */
router.get("/products/:name", productService.searchProductByNameRoute);


/**
 * @description get Product by category ID
 */
router.get("/getproductsbycategoryid/:id", productService.getProductByCategoryIdRoute);

/**
 * @description get Product by brand ID
 */
router.get("/getproductsbybrandid/:id", productService.getProductByBrandIdRoute);

/**
 * @description add product
 */
router.post("/products", productService.addProductRoute);

/**
 * @description add product
 */
router.put("/products/:id", productService.updateProductByIdRoute);


/**
 * @description add product
 */
router.delete("/products/:id", productService.deleteProductByIdRoute);


/**
 * @description add product
 */
router.delete("/products", productService.deleteAllProductsRoute);

module.exports = router;