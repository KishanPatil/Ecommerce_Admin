/**
 * @author Meghana Chavanke
 */
// Importing the cartmodel from cartSchema file
const { cartmodel } = require("../../models/Cart/cartSchema");
// Importing connectionDb and closeDb functions from connection file
const { connectionDb, closeDb } = require("../../database/connection")

/**
 * @description get all Cart
 * @returns {Promise<Array<Object>>} Array of Cart Objects
 */
const getAllCart = async () => {
  try {
    // Connect to the database
    await connectionDb();
    // Use Mongoose's `find` method to retrieve a cart object 
    const result = await cartmodel.find().populate('products');
    // Close the database connection
    await closeDb();
    // Return the retrieved cart object
    return result;
  }
  catch (e) {
    throw new Error(e);
  }
}

/**
 * @description get a Cart by id
 * @param {string} id - id of the Cart
 * @returns {Promise<Object>} Cart object
 */
const getCartById = async (id) => {
  try {
    // Connect to the database
    await connectionDb();
    // Use Mongoose's `findById` method to retrieve a cart object with the specified `id`
    const result = await cartmodel.findById(id).populate('products');
    // Close the database connection
    await closeDb();
    // Return the retrieved cart object
    return result;
  }
  catch (e) {
    throw new Error(e);
  }
}

/**
 * @description add a Cart
 * @param {string} customerId - id of the Customer
 * @param {Array<string>} products - Array of product ids
 * @returns {Promise<Object>} added Cart object
 */

const addCart = async (customerId, products, res) => {
  try {
    // Connect to the database
    await connectionDb();

    let cart = await cartmodel.findOne({ customerId });

    if (!cart) {
      cart = new cartmodel({ customerId, products });
    } else {
      products.forEach((product) => {
        const existingProduct = cart.products.find((p) => p.productid.equals(product.productid));

        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          cart.products.push(product);
        }
      });
    }

    await cart.save();

    res.status(200).json({ message: 'Product added to cart successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart' });
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
}



/**
 * @description update a Cart by id
 * @param {string} id - id of the Cart
 * @param {string} customerId - id of the Customer
 * @param {Array<string>} products - Array of product ids
 * @returns {Promise<Object>} updated Cart object
 */
const updateCart = async (id, customerId, products) => {
  try {
    await connectionDb();
    const result = await cartmodel.findByIdAndUpdate(id, { customerId: customerId, products: products });
    await closeDb();
    return result;
  }
  catch (e) {
    throw new Error(e);
  }
}

/**
 * @description delete a Cart by id
 * @param {string} id - id of the Cart
 * @returns {Promise<Object>} deleted Cart object
 */
const deleteCartById = async (id) => {
  try {
    console.log(id);
    await connectionDb();
    const result = await cartmodel.findByIdAndDelete(id);
    await closeDb();
    return result;
  }
  catch (e) {
    throw new Error(e);
  }
}

/**
 * @description delete all Carts
 * @returns {Promise<Object>} deleted Cart objects
 */
const deleteAllCart = async () => {
  try {
    await connectionDb();
    const result = await cartmodel.deleteMany();
    await closeDb();
    return result;
  }
  catch (e) {
    throw new Error(e);
  }
}

/**
 * get cart by customer id
 */
const getCartByCustomerId = async (customerId) => {
  try {
    await connectionDb();
    const cart = await cartmodel.findOne({ customerId }).populate('products.productid');
    await closeDb();
    return cart;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * remove product from cart by customer id
 *  * @param {*} customerId 
 * @param {*} productId 
 * @returns 
 */
const removeProductFromCart = async (customerId, productId) => {
  try {
    await connectionDb();
    const result = await cartmodel.findOneAndUpdate(
      { customerId },
      { $pull: { products: { productid: productId } } },
      { new: true }
    );
    await closeDb();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}
/**
* remove product from cart by customer id
*  * @param {*} customerId 
* @param {*} productId 
* @returns 
*/
const removeProductFromCart1 = async (customerId) => {
  try {
    await connectionDb();
    const result = await cartmodel.findOneAndDelete(
      { customerId }
    );
    await closeDb();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}
/**
 * 
 * @param {customerId} 
 * @param {productId}  
 * @returns 
 */
const removeProductFromCartbyProductId = async (customerId, productId) => {
  try {
    await connectionDb();
    const result = await cartmodel.updateOne(
      { customerId: customerId },
      { $pull: { products: { productid: productId } } }
    );
    await closeDb();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

const updateCartQuantity = async (customerId, productid, quantity) => {
  try {
    // Connect to the database
    await connectionDb();

    // Find the cart object with the specified `customerId` and `productId`
    const cart = await cartmodel.findOneAndUpdate(
      { customerId, 'products.productid': productid },
      { $set: { 'products.$.quantity': quantity } },
      { new: true }
    ).populate('products');

    // Close the database connection
    await closeDb();

    // Return the updated cart object
    return cart;
  } catch (e) {
    throw new Error(e);
  }
};



//exporting functions
module.exports = {
  getAllCart,
  getCartById,
  addCart,
  updateCart,
  deleteCartById,
  deleteAllCart,
  getCartByCustomerId,
  removeProductFromCart,
  updateCartQuantity,
  removeProductFromCart1,
  removeProductFromCartbyProductId
}
