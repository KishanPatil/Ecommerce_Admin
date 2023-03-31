/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Product/productBrandRoute')
/**
 * Route to Get all Products brand.
 * HTTP Method: GET
 */
router.get("/getAllBrands", service.getAllBrandProductsRoute);

/**
 * Route to get Products Brand by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the Brand item.
 */
router.get("/getBrandById/:id", service.getBrandProductByIdRoute);
/**
 * Route to Add a Brand item.
 * HTTP Method: Post
 */
router.post("/addBrand", service.addProductBrandRoute);

/**
 * Route to update a  product brand by ID
 * HTTP Method: PUT
 * @param {string} id - The ID of the product brand item to update.
 */
router.put("/updateBrand/:id", service.updateProductBrandRoute);

/**
 * @description delete Product brand by Id
 */
/**
 * Route to delete Product brand by Id
 * HTTP Method: Delete
 * @param {string} id - The ID of the Product brand item to Delete.
 */
router.delete("/deleteBrand/:id", service.deleteProductBrandByIdRoute);
/**
 * Route to delete all Product brand 
 * HTTP Method: DELETE
 */
router.delete("/deleteAllBrand", service.deleteAllBrandRoute);

module.exports = router