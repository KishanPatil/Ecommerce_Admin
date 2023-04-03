/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const express = require('express');
var router = express.Router();
const brandService = require('../../services/Product/productBrandRoute')
/**
 * Route to Get all Products brand.
 * HTTP Method: GET
 */
router.get("/brands", brandService.getAllBrandProductsRoute);

/**
 * Route to get Products Brand by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Brand item.
 */
router.get("/brands/:id", brandService.getBrandProductByIdRoute);
/**
 * Route to Add a Brand item.
 * HTTP Method: Post
 */
router.post("/brands", brandService.addProductBrandRoute);

/**
 * Route to update a  product brand by ID
 * HTTP Method: PUT
 * @param {string} id - The ID of the product brand item to update.
 */
router.put("/brands/:id", brandService.updateProductBrandRoute);

/**
 * @description delete Product brand by Id
 */
/**
 * Route to delete Product brand by Id
 * HTTP Method: Delete
 * @param {string} id - The ID of the Product brand item to Delete.
 */
router.delete("/brands/:id", brandService.deleteProductBrandByIdRoute);
/**
 * Route to delete all Product brand 
 * HTTP Method: DELETE
 */
router.delete("/brands", brandService.deleteAllProductBrandsRoute);

module.exports = router