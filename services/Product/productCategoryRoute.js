/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const {
    getAllProductCategories, 
    addProductCategory,
    getProductCategoryById,
    updateProductCategoryById,
    deleteProductCategoryById,
    getProductCategoryByName,
    deleteAllProductCategories} =require('./productCategory')

/**
 * @description get all category
 * @returns 
 */
const  getAllProductCategoriesRoute = async(request,response) => {
    try{
        const result=  await getAllProductCategories();
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
/**
 * @description get category by id 
 * @returns 
 */
const  getProductCategoryByIdRoute = async(request,response) => {
    try{
        //  get id by url or parameter 
        const {id}=request.params;
        console.log({id})
        const result=  await getProductCategoryById(id);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

/**
 * @description add product category
 * @param {*} request 
 * @param {*} response 
 */
const  addProductCategoryRoute = async(request,response) => {
    
    try{
            /** insert category name */
            const {CategoryName,image}=request.body;
            console.log({CategoryName})
            //call the addProductCategory(CategoryName) and return the result
            const result=  await addProductCategory(CategoryName,image);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

/**
 * @description update product category
 * @param {*} request 
 * @param {*} response 
 */
const  updateProductCategoryByIdRoute = async(request,response) => {
    
    try{
            const {id}=request.params;
            const {CategoryName,image}=request.body;
            console.log(id)
            console.log(CategoryName)
            //update data 
            const result=  await updateProductCategoryById(id,CategoryName,image);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}


const  deleteProductCategoryByIdRoute = async(request,response) => {
    
    try{
            const {id}=request.params;
            console.log(id)
            //update data 
            const result=  await deleteProductCategoryById(id);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

const  deleteAllProductCategoriesRoute = async(request,response) => {
    
    try{
            //delete All Brand 
            const result=  await deleteAllProductCategories();
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

/**
 * @description get category by id 
 * @returns 
 */
const  getProductCategoryByNameRoute = async(request,response) => {
    try{
        //  get id by url or parameter 
        const {CategoryName}=request.params;
        console.log({CategoryName})
        const result=  await getProductCategoryByName(CategoryName);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
module.exports={
    getAllProductCategoriesRoute,
    getProductCategoryByIdRoute,
    addProductCategoryRoute,
    updateProductCategoryByIdRoute,
    deleteProductCategoryByIdRoute,
    deleteAllProductCategoriesRoute,
    getProductCategoryByNameRoute
}

