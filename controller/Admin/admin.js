/**
 * @author Kishan Patil
 */
const express = require('express');
var router = express.Router();
const service = require('../../services/Admin/AdminRoute') 
/**
 * Route to Get all admin
 * HTTP Method: GET
 */
router.get("/getAllAdmin", service.getAllAdminRoute);
/**
 * Route to Get a admin by ID.
 * HTTP Method: GET
 * @param {string} id - The ID of the Address item.
 */
router.get("/getAdminById/:id", service.getAdminByIdRoute);
/**
 * Route to Add a new admin
 * HTTP Method: POST
 */
router.post("/createAdmin", service.createAdminRoute);
/**
 * Route to update a admin item.
 * HTTP Method: PUT
 * @param {string} id - The ID of the admin item to update.
 */
router.put("/updateAdmin/:id", service.updateAdminRoute);

/**
 * Route to Delete a Billing item.
 * HTTP Method: Delete
 * @param {string} id - The ID of the admin item to Delete.
 */
router.delete("/deleteAdmin/:id", service.deleteAdminByIdRoute);
/**
 * Route to delete all admin items.
 * HTTP Method: DELETE
 */
router.delete("/deleteAllAdmin", service.deleteAllAdminRoute);

module.exports = router;
