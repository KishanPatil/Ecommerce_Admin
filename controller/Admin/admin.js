/**
 * @fileOverview Admin routes
 * @author Meghana Chavanke
 * @exports router
 */

const express = require('express');
const router = express.Router();
const adminService = require('../../services/Admin/AdminRoute');

/**
 * Route to get all admins
 * HTTP Method: GET
 */
router.get('/admins', adminService.getAllAdminsRoute);

/**
 * Route to get an admin by ID
 * HTTP Method: GET
 * @param {string} id - The ID of the admin to retrieve
 */
router.get('/admins/:id', adminService.getAdminByIdRoute);

/**
 * Route to create a new admin
 * HTTP Method: POST
 */
router.post('/admins', adminService.createAdminRoute);

/**
 * Route to update an existing admin
 * HTTP Method: PUT
 * @param {string} id - The ID of the admin to update
 */
router.put('/admins/:id', adminService.updateAdminByIdRoute);

/**
 * Route to delete an admin by ID
 * HTTP Method: DELETE
 * @param {string} id - The ID of the admin to delete
 */
router.delete('/admins/:id', adminService.deleteAdminByIdRoute);

/**
 * Route to delete all admins
 * HTTP Method: DELETE
 */
router.delete('/admins', adminService.deleteAllAdminsRoute);

module.exports = router;
