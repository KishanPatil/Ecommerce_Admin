/**
 * @author Meghana Chavanke
 */
const { productCategorymodel } = require("../../models/product/productCategorySchema");
const { connectionDb, closeDb } = require("../../database/connection")

/**
 * @description Get all categories from the database
 * @returns {Array} An array of all product categories
 */
const getAllProductCategories = async () => {
  try {
    await connectionDb()
    const result = await productCategorymodel.find()
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Get a category by its ID
 * @param {string} id - The ID of the category to retrieve
 * @returns {object} The product category object matching the provided ID
 */
const getProductCategoryById = async (id) => {
  try {
    await connectionDb()
    const result = await productCategorymodel.findById(id)
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Add a new product category to the database
 * @param {string} CategoryName - The name of the category to add
 * @returns {object} The newly created product category object
 */
const addProductCategory = async (CategoryName, image) => {
  try {
    // connection
    await connectionDb()
    const result = await productCategorymodel.create({
      CategoryName, image
    });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Update a product category by its ID
 * @param {string} id - The ID of the category to update
 * @param {string} newCategoryName - The new name to assign to the category
 * @returns {object} The updated product category object
 */
const updateProductCategoryById = async (id, CategoryName, image) => {
  try {
    // connection
    await connectionDb()
    const result = await productCategorymodel.findByIdAndUpdate(id, { CategoryName: CategoryName, image: image });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Delete a product category by its ID
 * @param {string} id - The ID of the category to delete
 * @returns {object} The deleted product category object
 */
const deleteProductCategoryById = async (id) => {
  try {
    // connection
    await connectionDb()
    const result = await productCategorymodel.findByIdAndDelete(id);
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Delete all product categories from the database
 * @returns {object} The result of the delete operation
 */
const deleteAllProductCategories = async () => {
  try {
    // connection
    await connectionDb()
    //   delete all categories
    const result = await productCategorymodel.deleteMany();
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

const getProductCategoryByName = async (CategoryName) => {
  try {
    await connectionDb();
    let query = {};
    if (CategoryName) {
      query = { CategoryName: { $regex: CategoryName, $options: "i" } };
    }
    const result = await productCategorymodel.find(query);
    await closeDb();
    return result;
  } catch (e) {
    throw new Error(e);
  }
};


module.exports = {
  getAllProductCategories,
  addProductCategory,
  getProductCategoryById,
  updateProductCategoryById,
  deleteProductCategoryById,
  deleteAllProductCategories,
  getProductCategoryByName
}
