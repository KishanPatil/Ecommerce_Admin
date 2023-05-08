import { Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';


import Home from '../src/Admin/Home/Home'
import Customer from '../src/Admin/Customer/Customer'
import Product from '../src/Admin/Product/Product'
import AddProduct from "../src/Admin/Product/AddProduct";
import UpdateProduct from "../src/Admin/Product/UpdateProduct";
import ProductCategory from "../src/Admin/ProductCategory/ProductCategory";
import AddProductCategory from "../src/Admin/ProductCategory/AddProductCategory";
import UpdateCategory from "../src/Admin/ProductCategory/UpdateCategory";
import ProductBrand from "../src/Admin/ProductBrand/ProductBrand";
import AddProductBrand from "../src/Admin/ProductBrand/AddProductBrand";
import UpdateProductBrand from "../src/Admin/ProductBrand/UpdatePrductBrand";
import Cart from "../src/Admin/Cart/Cart";
// import CreateUserAccount from '../src/LoginSignup/CreateUserAccountPage/CreateUserAccount'
import Order from "../src/Admin/Order/Order";
// import LoginPage from "./LoginSignup/LoginPage/LoginPage";
import Payment from "../src/Admin/Payment/Payment"
import UpdatePayment from "../src/Admin/Payment/UpdatePayment";
import Navbar from "../src/Admin/Navbar/Navbar";
import LoginPage from "../src/LoginSignup/LoginPage/LoginPage";



// import Layout from './Layout/Layout';
// import Customer from './Customer/Customer';
// import Home from './Home/Home';
// import Product from './Product/Product';
// import AddProduct from './Product/AddProduct';
// import UpdateProduct from './Product'
function App() {
  return (    
    <>
      {/* <BrowserRouter>
      <Routes>
          <Route path='' element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
         
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />

          <Route path="category" element={<ProductCategory />} />
          <Route path="updateCategory/:id" element={<UpdateCategory />} />
          <Route path="addCategory" element={<AddProductCategory />} />

          <Route path="brand" element={<ProductBrand />} />
          <Route path="addBrand" element={<AddProductBrand />} />
          <Route path="updateBrand/:id" element={<UpdateProductBrand />} />
          
          <Route path="cart" element={<Cart />} />

          <Route path="payment" element={<Payment />} />
          <Route path="/updatepayment/:id" element={<UpdatePayment />} />

          <Route path="order" element={<Order />} />

          <Route path="navbar" element={<Navbar />} />

        </Route>
        
      </Routes> 
    </BrowserRouter>*/}
    </>
  );
}

export default App;
