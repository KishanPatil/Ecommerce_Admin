import React from 'react'
import Navbar from '../Admin/Navbar/Navbar'
import Product from '../Admin/Product/Product'
import LoginPage from '../LoginSignup/LoginPage/LoginPage'

// import { createBrowserRouter } from "react-router-dom/dist";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from '../Admin/Product/AddProduct';
import UpdateProduct from '../Admin/Product/UpdateProduct';
import ProductCategory from '../Admin/ProductCategory/ProductCategory';
import AddProductCategory from '../Admin/ProductCategory/AddProductCategory';
import UpdateCategory from '../Admin/ProductCategory/UpdateCategory';
import ProductBrand from '../Admin/ProductBrand/ProductBrand';
import AddProductBrand from '../Admin/ProductBrand/AddProductBrand';
import UpdateProductBrand from '../Admin/ProductBrand/UpdatePrductBrand';
import Cart from '../Admin/Cart/Cart';
import Payment from '../Admin/Payment/Payment';
import Home from '../Admin/Home/Home';
import ProductDisplay from '../Admin/Product/ProductDisplay'
import Customer from '../Admin/Customer/Customer';
import UpdatePayment from '../Admin/Payment/UpdatePayment';
import Order from '../Admin/Order/Order';
const router = createBrowserRouter([
    { path: '', element: <LoginPage /> },
    {
        path: 'navbar', element: <Navbar />, children: [
            { path: 'home', element: <Home /> },
            { path: 'customer', element: <Customer /> },
            
            //Product 
            { path: 'product', element: <Product /> },
            { path: 'product/addproduct', element: <AddProduct /> },
            { path: 'product/updateproduct/:id', element: <UpdateProduct /> },
            { path: 'product/productdisplay/:id', element: <ProductDisplay /> },

            //category
            { path: 'category', element: <ProductCategory /> },
            { path: 'category/addcategory', element: <AddProductCategory /> },
            { path: 'category/updatecategory/:id', element: <UpdateCategory /> },

            { path: 'cart', element: <Cart /> },

            { path: 'brand', element: <ProductBrand /> },
            { path: 'brand/addbrand', element: <AddProductBrand /> },
            { path: 'brand/updatebrand/:id', element: <UpdateProductBrand /> },

            { path: 'payment', element: <Payment /> },
            { path: 'payment/updatepayment/:id', element: <UpdatePayment /> },

            { path: 'order', element: <Order /> },
            { path: 'updatepayment/:id', element: <UpdatePayment /> },





        ]
    },
    // {path : 'customer' , element : <Dashboard/> }
])

export { router }