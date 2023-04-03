/**
 * @author Meghana Chavanke
 */
const express = require('express');
var router = express.Router();
const categoryService = require('../../services/Product/productCategoryRoute')
/**
 * Route to get all Products category list by get method
 * HTTP Method: GET
 */
router.get("/categories", categoryService.getAllProductCategoriesRoute);
/**
 * Route to get Products category by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Category item.
 */
router.get("/categories/:CategoryName", categoryService.getProductCategoryByNameRoute);
/**
 * Route to get Products category by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Category item.
 */
router.get("/categories/:id", categoryService.getProductCategoryByIdRoute);
/**
 * Route to Add a category
 * HTTP Method: POST
 */
router.post("/categories", categoryService.addProductCategoryRoute);

/**
 * @description update product brand by ID
 */
/**
 * Route to pdate product brand by ID
 * HTTP Method: PUT
 * @param {string} id - The ID of the category item to update.
 */
router.put("/categories/:id", categoryService.updateProductCategoryByIdRoute);

/**
 * @description delete Product brand by Id
 */
/**
 * Route to delete Product brand by Id
 * HTTP Method: Delete
 * @param {string} id - The ID of the Product brand  item to Delete.
 */
router.delete("/categories/:id", categoryService.deleteProductCategoryByIdRoute);

/**
 * Route to delete all Product brand 
 * HTTP Method: DELETE
 */
router.delete("/categories", categoryService.deleteAllProductCategoriesRoute);

module.exports = router