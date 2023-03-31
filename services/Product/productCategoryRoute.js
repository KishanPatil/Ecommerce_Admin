const {getAllCategory, addProductCategory,getProductCategoryById,updateProductCategory,deleteProductCategoryById,deleteAllCategory} =require('./productCategory')

/**
 * @description get all category
 * @returns 
 */
const  getAllCategoryProductsRoute = async(request,response) => {
    try{
        const result=  await getAllCategory();
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
const  updateProductCategoryRoute = async(request,response) => {
    
    try{
            const {id}=request.params;
            const {CategoryName,image}=request.body;
            console.log(id)
            console.log(CategoryName)
            //update data 
            const result=  await updateProductCategory(id,CategoryName,image);
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

const  deleteAllCategoryRoute = async(request,response) => {
    
    try{
            //delete All Brand 
            const result=  await deleteAllCategory();
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
const  getCategoryByNameRoute = async(request,response) => {
    try{
        //  get id by url or parameter 
        const {CategoryName}=request.params;
        console.log({CategoryName})
        const result=  await getCategoryByName(CategoryName);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
module.exports={
    getAllCategoryProductsRoute,
    getProductCategoryByIdRoute,
    addProductCategoryRoute,
    updateProductCategoryRoute,
    deleteProductCategoryByIdRoute,
    deleteAllCategoryRoute,
    getCategoryByNameRoute
}

