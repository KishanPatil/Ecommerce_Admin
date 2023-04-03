/**
 * @author  Meghana Chavanke
 */
const { customerAddressmodel } = require("../../models/Customer/customerAddressSchema");
const { connectionDb, closeDb } = require("../../database/connection")

// Get all customer addresses
const getAllAddresses = async () => {
  try {
    // Establish database connection
    await connectionDb()
    // Find all addresses
    const result = await customerAddressmodel.find()
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Get a customer address by ID
const getAddressById = async (id) => {
  try {
    // Establish database connection
    await connectionDb()
    // Find address by ID
    const result = await customerAddressmodel.findById(id)
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Add a customer address
const addAddress = async (city, state, pincode) => {
  try {
    // Establish database connection
    await connectionDb()
    // Create new address document
    const result = await customerAddressmodel.create({
      city,
      state,
      pincode
    });
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Update a customer address by ID
const updateAddressById = async (id, city, state, pincode) => {
  try {
    // Establish database connection
    await connectionDb()
    // Find and update address by ID
    const result = await customerAddressmodel.findByIdAndUpdate(id, { city: city, state: state, pincode: pincode });
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Delete a customer address by ID
const deleteAddressById = async (id) => {
  try {
    // Establish database connection
    await connectionDb()
    // Find and delete address by ID
    const result = await customerAddressmodel.findByIdAndDelete(id);
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Delete all customer addresses
const deleteAllAddresses = async () => {
  try {
    // Establish database connection
    await connectionDb()
    // Delete all addresses
    const result = await customerAddressmodel.deleteMany();
    // Close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

// Export functions
module.exports = {
  getAllAddresses,
  getAddressById,
  addAddress,
  updateAddressById,
  deleteAddressById,
  deleteAllAddresses
}
