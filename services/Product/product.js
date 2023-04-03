/**
 * @author Meghana Chavanke
 */
const { productsmodel } = require("../../models/product/productsSchema");
const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
const { connectionDb, closeDb } = require("../../database/connection")

/**
 * @description get all products
 * @returns 
 */
const getAllProducts = async () => {
  try {
    await connectionDb()
    const result = await productsmodel.find().populate('brand').populate('category')
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}
/**
 * @description get products by Id
 * @param {*} id 
 * @returns 
 */
const getProductById = async (id) => {
  try {
    await connectionDb()
    const result = await productsmodel.findById(id)
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description get Product by category Id
 * @param {*} id 
 * @returns 
 */
const getProductByCategoryId = async (id) => {
  try {
    console.log(id)
    await connectionDb()
    const result = await productsmodel.find({ category: ObjectId(id) }).populate('brand').populate('category')
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description get Product by category Id
 * @param {*} id 
 * @returns 
 */
const getProductByBrandId = async (id) => {
  try {
    console.log(id)
    await connectionDb()
    const result = await productsmodel.find({ brand: ObjectId(id) }).populate('brand').populate('category')
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

const searchProductsByName = async (name) => {
  try {
    await connectionDb();
    const result = await productsmodel.find({ Name: { $regex: name, $options: 'i' } }).populate('brand').populate('category');
    await closeDb();
    return result;
  } catch (e) {
    throw new Error(e);
  }
};


/**
 * @description ADd products
 * @param {*} id 
 * @returns 
 */
const addProduct = async (Name, Description, image, Quantity, Price, brand, category) => {
  try {
    await connectionDb()
    const result = await productsmodel.create({
      Name,
      Description,
      image,
      Quantity,
      Price,
      brand,
      category
    });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description update products by Id
 * @param {*} id 
 * @returns 
 */
const updateProductById = async (id, Name, Description, image, Quantity, Price, brand, category) => {
  try {
    // connection
    await connectionDb()
    const result = await productsmodel.findByIdAndUpdate(id, { Name: Name, Description: Description, image: image, Quantity: Quantity, Price: Price, brand: brand, category: category });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description delete products by Id
 * @param {*} id 
 * @returns 
 */
const deleteProductById = async (id) => {
  try {
    console.log(id);
    // connection
    await connectionDb()
    const result = await productsmodel.findByIdAndDelete(id);
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description Delete all products
 * @param {*} id 
 * @returns 
 */
const deleteAllProducts = async () => {
  try {
    // connection
    await connectionDb()
    //   delete ALl br
    const result = await productsmodel.deleteMany();
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

//exporting function
module.exports = {
  getAllProducts,
  getProductById,
  searchProductsByName,
  getProductByCategoryId,
  getProductByBrandId,
  addProduct,
  updateProductById,
  deleteProductById,
  deleteAllProducts
}