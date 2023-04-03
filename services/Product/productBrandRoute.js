/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const {getAllProductBrands,addProductBrand,updateProductBrandById,deleteProductBrandById,deleteAllProductBrands,getProductBrandById} =require('./productBrand')

/**
 * @description get all brand
 * @returns 
 */ 
const  getAllBrandProductsRoute = async(request,response) => {
    try{
        const result=  await getAllProductBrands();
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
/**
 * @description get product by brand id
 * @param {*} id 
 * @returns result
 */
const  getBrandProductByIdRoute = async(request,response) => {
    try{
        //  get id by url or parameter 
        const {id}=request.params;
        console.log({id})
        const result=  await getProductBrandById(id);
        console.log(result)
        response.send(result)
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}

/**
 * @description Add Products brand
 * @param {*} BrandName 
 * @returns 
 */
const  addProductBrandRoute = async(request,response) => {
    
    try{
            const {BrandName,image}=request.body;
            console.log({BrandName})
            //getting data 
            const result=  await addProductBrand(BrandName,image);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
/**
 * @description update product brand
 * @param {*} id 
 * @param {*} BrandName 
 * @returns 
 */
const  updateProductBrandRoute = async(request,response) => {
    
    try{
            const {id}=request.params;
            const {BrandName,image}=request.body;
            console.log(id)
            console.log(BrandName)
            //update data 
            const result=  await updateProductBrandById(id,BrandName,image);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
/**
 * @description delete product brand by id
 * @param {*} id 
 * @returns 
 */
const  deleteProductBrandByIdRoute = async(request,response) => {
    
    try{
            const {id}=request.params;
            console.log(id)
            //update data 
            const result=  await deleteProductBrandById(id);
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
/**
 * @description delete all products brand
 * @param {*} id 
 * @returns 
 */
const  deleteAllProductBrandsRoute = async(request,response) => {
    
    try{
            //delete All Brand 
            const result=  await deleteAllProductBrands();
            console.log(result)
            response.send(result)
       
    }
    catch(e){
        console.log(e);
        response.send(e)
    }
}
module.exports={
    getAllBrandProductsRoute,
    getBrandProductByIdRoute,
    addProductBrandRoute,
    updateProductBrandRoute,
    deleteProductBrandByIdRoute,
    deleteAllProductBrandsRoute
}