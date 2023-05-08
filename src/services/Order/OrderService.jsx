import axios from 'axios';
const baseUrl="http://localhost:3009";
const getAllOrders = async(setState) =>{
    try{
        const response = await axios.get(`${baseUrl}/order/orders`)
        return response.data;
    }
    catch(e){
        console.log(e)
    }
}

const deleteOrderById = async(id) =>{
    try{
        const response = await axios.delete(`${baseUrl}/order/orders/${id}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}

const getOrderById = async(id ) => {
    try{
        const response = await axios.get(`${baseUrl}/order/orders/${id}`);
        // console.log(response.data)
        return response.data;
        }
        catch(e){
            console.log(e)
        }
}
export {getOrderById , deleteOrderById , getAllOrders}
