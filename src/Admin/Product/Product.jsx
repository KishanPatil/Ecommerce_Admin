// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts, deleteProductByID } from '../../services/Product/ProductService'
import './Product.css';
import 'bootstrap/dist/css/bootstrap.css';
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash,faInfo } from '@fortawesome/free-solid-svg-icons';

// Defining a functional component called "Product"
export default function Product() {
  // Setting up state using the "useState" hook
  const [products, setProducts] = useState([]);
  // Setting up a variable called "count"
  var count = 0;

  // Using the "useEffect" hook to fetch all products
  useEffect(() => {
    // Defining an asynchronous function to fetch all products
    const fetchProducts = async () => {
      // Calling the "getAllProducts" function from the product service
      const allProducts = await getAllProducts();
      // Setting the products state using the fetched products
      setProducts(allProducts);
      // Logging all products to the console
      console.log(allProducts);
    };

    // Calling the fetchProducts function
    fetchProducts();
  }, []);

  // Defining a function to handle delete product button clicks
  const onDeleteClick = async (id) => {
    // Displaying a confirmation dialog box
    const ans = window.confirm('Can I Delete')
    // If the user confirms the deletion
    if (ans) {
      // Deleting the product using the "deleteProductByID" function from the product service
      await deleteProductByID(id) 
      // Fetching all products after the deletion
      const allProducts = await getAllProducts();
      // Setting the products state using the fetched products
      setProducts(allProducts);
    } 
  }

  // Rendering the product list and delete button for each product
  if (products.length > 0) {
    return (
      <div style={{fontSize:"0.9rem"}}>
         {/* Adding a title and a button to add a new product */}
         <h2 className='text-center' >Products</h2><br />
        <div className='container' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <div className='row d-flex justify-content-center align-items-center text-center'>
            <div className='container px-5 w-100 d-flex justify-content-end'>
            <Link to="addproduct"><button className="btn" id='linkAdd' style={{backgroundColor:'#AFAFAF'}}>Add Product</button></Link><br /><br />
            </div>
            
            {/* Creating a table to display the products */}
            <div className=" " style={{ display:'flex', justifyContent:'center', alignItems:'center',maxWidth: "100%" }}>
             <br />
              <table className="table table-responsive">
                <thead >
                {/* Creating table headers */}
                <th scope="col ">#</th>
                <th scope="col "> Product ID</th>
                <th scope="col">Name</th>
                <th scope="col" style={{height:"30px",width:"40px"}}>Image</th>
                {/* <th scope="col" >Description</th> */}
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">brand</th>
                <th scope="col">category</th>
                <th scope="col"> Action</th>
            </thead>
            <tbody>
              {/* Map through each product and create a table row */}
              {products.map((item) => (

                <tr key={item._id}>
                  <td>{count = count + 1}</td>
                  {/* <td>
                      <span className="truncate">{item._id}</span> <br />
                      <span className="copy" data-clipboard-text={item._id} onClick={(e) => {
                        // Copy the text to clipboard
                        navigator.clipboard.writeText(item._id);
                        // Replace "Copy" with "Copied!"
                        const copySpan = e.target;
                        copySpan.textContent = 'Copied!';
                        setTimeout(() => {
                          copySpan.textContent = 'Copy';
                        }, 1500);
                      }}>Copy</span>
                    </td> */}
                  <td>{item._id}</td>
                  <td>{item.Name}</td>
                  <td > <img src={item.image} alt="Product Image" style={{width:"123%", height:'125%'}} /></td>
                  {/* <td style={{ height: "10%", width: "40%" }}>{item.Description}</td> */}
                  {/* <td>
                      <span className="truncate-desc">{item.Description}</span> <br />
                      <span className="copy-discription" data-clipboard-text={item.Description} onClick={(e) => {
                        // Copy the text to clipboard
                        navigator.clipboard.writeText(item.Description);
                        // Replace "Copy" with "Copied!"
                        const copySpan = e.target;
                        copySpan.textContent = 'Copied!';
                        setTimeout(() => {
                          copySpan.textContent = 'Copy';
                        }, 1500);
                      }}>Copy</span>
                  </td> */}
                  {/* <td style={{maxHeight:'30%',maxWidth:'30%'}}>{item.Description}</td> */}
                  <td>{item.Price}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.brand?.BrandName}</td>
                  <td >{item.category?.CategoryName}</td>
                  {/* Create a link to update the product */}
                  <td><Link to={`productdisplay/${item._id}`}><button className="btn"><FontAwesomeIcon icon={faInfo} className='text-primary trash-icon-hover' title="Update"/> </button></Link>
                  
                  <Link to={`updateproduct/${item._id}`}><button className="btn"><FontAwesomeIcon icon={faEdit} className='text-primary trash-icon-hover' title="Update"/> </button></Link>
                  {/* Create a button to delete the product */}
                  <Link>
                          <button className="btn btn-light " onClick={(e) => onDeleteClick(item._id)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger trash-icon-hover' title="Delete"/>
                          </button>
                        </Link>
                  </td>
                </tr>

              )

              )}

            </tbody>

          </table>
        </div>
        </div>
        </div>
      </div>
    )
  }
  else {
    // If there are no products in the array, display a message and a button to add a new product
    return (
      <div>
        <Link to="/AddProduct"><button className="btn text-right mr-5 bg-primary ml-19">Add Product</button></Link>
        <div className="container">

          <br></br>
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">_id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">brand</th>
                <th scope="col">category</th>
                <th scope="col"> update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          <br></br>

        </div>
        <div className='text-center '> <h3>NO DATA PLEASE ADD</h3> </div>
      </div>
    )
  }
}
