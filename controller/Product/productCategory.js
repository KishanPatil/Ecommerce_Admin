/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Product/productCategoryRoute')
/**
 * Route to get all Products category list by get method
 * HTTP Method: GET
 */
router.get("/getAllCategory", service.getAllCategoryProductsRoute);
/**
 * Route to get Products category by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Category item.
 */
router.get("/getcategorybyname/:CategoryName", service.getCategoryByNameRoute);
/**
 * Route to get Products category by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Category item.
 */
router.get("/getCategoryById/:id", service.getProductCategoryByIdRoute);
/**
 * Route to Add a category
 * HTTP Method: POST
 */
router.post("/addCategory", service.addProductCategoryRoute);

/**
 * @description update product brand by ID
 */
/**
 * Route to pdate product brand by ID
 * HTTP Method: PUT
 * @param {string} id - The ID of the category item to update.
 */
router.put("/updateCategory/:id", service.updateProductCategoryRoute);

/**
 * @description delete Product brand by Id
 */
/**
 * Route to delete Product brand by Id
 * HTTP Method: Delete
 * @param {string} id - The ID of the Product brand  item to Delete.
 */
router.delete("/deleteCategory/:id", service.deleteProductCategoryByIdRoute);

/**
 * Route to delete all Product brand 
 * HTTP Method: DELETE
 */
router.delete("/deleteAllCategory", service.deleteAllCategoryRoute);

module.exports = router