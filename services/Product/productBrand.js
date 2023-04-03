/**
 * @author Meghana Chavanke
 */
const { productBrandmodel } = require("../../models/product/productBrandSchema");
const { connectionDb, closeDb } = require("../../database/connection")

/**
 * @description get all brand
 * @returns 
 */
const getAllProductBrands = async () => {
  try {
    await connectionDb()
    const result = await productBrandmodel.find()
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

/**
 * @description get product by brand id
 * @param {*} id 
 * @returns result
 */
const getProductBrandById = async (id) => {
  try {
    await connectionDb()
    const result = await productBrandmodel.findById(id)
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}
/**
 * @description Add Products brand
 * @param {*} BrandName 
 * @returns 
 */
const addProductBrand = async (BrandName, image) => {
  try {
    // connection
    await connectionDb()
    const result = await productBrandmodel.create({
      BrandName,
      image
    });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}
/**
 * @description update product brand
 * @param {*} id 
 * @param {*} BrandName 
 * @returns 
 */
const updateProductBrandById = async (id, BrandName, image) => {
  try {
    // connection
    await connectionDb()
    const result = await productBrandmodel.findByIdAndUpdate(id, { BrandName: BrandName, image: image });
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}
/**
 * @description delete product brand by id
 * @param {*} id 
 * @returns 
 */
const deleteProductBrandById = async (id) => {
  try {
    // connection
    await connectionDb()
    const result = await productBrandmodel.findByIdAndDelete(id);
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}
/**
 * @description delete all products brand
 * @param {*} id 
 * @returns 
 */
const deleteAllProductBrands = async () => {
  try {
    // connection
    await connectionDb()
    //   delete ALl br
    const result = await productBrandmodel.deleteMany();
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  getAllProductBrands,
  getProductBrandById,
  addProductBrand,
  updateProductBrandById,
  deleteProductBrandById,
  deleteAllProductBrands
}