// Importing the necessary functions from product.js file
const { getAllProducts, getProductById,searchProductsByName, getProductByCategoryId,getProductByBrandId, addProduct, updateProduct, deleteProductById, deleteAll } = require('./product');

// Route to get all the products
const getAllProductsRoute = async (request, response) => {
    try {
        const result = await getAllProducts();
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to get product by id
const getProductByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await getProductById(id);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to get product by id
const searchProductByNameRoute = async (request, response) => {
    try {
        const { name } = request.params;
        const result = await searchProductsByName(name);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to get products by category id
const getProductByCategoryIdRoute = async (request, response) => {
    const { id } = request.params;
    try {
        console.log(id)
        const result = await getProductByCategoryId(id);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to get products by brand id
const getProductByBrandIdRoute = async (request, response) => {
    const { id } = request.params;
    try {
        console.log(id)
        const result = await getProductByBrandId(id);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to add a new product
const addProductRoute = async (request, response) => {
    try {
        const { Name } = request.body;
        const { Description } = request.body;
        const { Quantity } = request.body;
        const { Price } = request.body;
        const { brand } = request.body;
        const { category } = request.body;
        const { image } = request.body;
        console.log({ Name, Description, Quantity, Price, brand, category });
        const result = await addProduct(Name, Description, image,Quantity, Price, brand, category);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to update an existing product
const updateProductRoute = async (request, response) => {
    try {
        const { id } = request.params;
        const { Name } = request.body;
        const { Description } = request.body;
        const { image } = request.body;
        const { Quantity } = request.body;
        const { Price } = request.body;
        const { brand } = request.body;
        const { category } = request.body;
        console.log(id);
        const result = await updateProduct(id, Name, Description, image,Quantity, Price, brand, category);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to delete a product by id
const deleteProductByIdRoute = async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id);
        const result = await deleteProductById(id);
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Route to delete all the products
const deleteAllRoute = async (request, response) => {
    try {
        const result = await deleteAll();
        console.log(result);
        response.send(result);
    } catch (e) {
        console.log(e);
        response.send(e);
    }
};

// Exporting all the route functions
module.exports = {
    getAllProductsRoute,
    getProductByIdRoute,
    searchProductByNameRoute,
    getProductByCategoryIdRoute,
    getProductByBrandIdRoute,
    addProductRoute,
    updateProductRoute,
    deleteProductByIdRoute,
    deleteAllRoute
};
