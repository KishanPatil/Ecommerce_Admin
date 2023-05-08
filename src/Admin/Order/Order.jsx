// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Admin/Order/Order.css';
import { getAllOrders, getOrderById, deleteOrderById } from '../../services/Order/OrderService'
import 'bootstrap/dist/css/bootstrap.css';
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Defining a functional component called "Order"
export default function Order() {
  // Setting up state using the "useState" hook
  const [order, setOrder] = useState([]);


  // Setting up a variable called "count"
  var count = 0;

  // Using the "useEffect" hook to fetch all Order
  useEffect(() => {
    // initialize clipboard
    const clipboard = new ClipboardJS('.copy');


    // Defining an asynchronous function to fetch all orders
    const fetchOrder = async () => {
      // Calling the "getAllOrder" function from the cart service
      const allOrder = await getAllOrders();
      // Setting the products state using the fetched products
      setOrder(allOrder);
      // Logging all products to the console
      console.log(allOrder);
    };

    // Calling the fetchProducts function
    fetchOrder();
    // clean up
    return () => {
      clipboard.destroy();
    };

  }, []);

  // Defining a function to handle delete product button clicks
  const onDeleteClick = async (id) => {
    // Displaying a confirmation dialog box
    const ans = window.confirm('Do You Want To Delete')
    // If the user confirms the deletion
    if (ans) {
      // Deleting the product using the "deleteProductByID" function from the product service
      await deleteOrderById(id)
      // Fetching all products after the deletion
      const allOrder = await getAllOrders();
      // Setting the products state using the fetched products
      setOrder(allOrder);
    }
  }

  // Rendering the product list and delete button for each product
  if (order.length > 0) {
    return (
      <div>
        {/* Adding a title and a button to add a new product */}
        <h2 className='text-center' >Order</h2><br />
        <div className='container-fluid' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='row  justify-content-center align-items-center text-center'>

            <div className='col-lg-9 col-md-8 col-sm-12'></div>

            {/* Creating a table to display the products */}
            <div className="container " style={{ maxWidth: "100%" }}>
              <br />
              <table className="table table-responsive">
                <thead style={{ backgroundColor: '#AFAFAF' }}>

                  {/* Creating table headers */}
                  <th scope="col ">#</th>
                  <th scope="col " >Order Id</th>
                  <th scope="col" >Customer Id</th>
                  <th scope="col">Payment</th>
                  <th scope="col"> Status </th>
                  <th scope="col">Payment Create Date</th>
                  <th scope="col">Payment Update Date</th>
                  <th scope="col">Action</th>
                </thead>
                <tbody>
                  {/* Map through each product and create a table row */}
                  {order.map((item) => (
                    <tr key={item._id}>
                      <td>{count = count + 1}</td>
                      {/* <td>
                        <span className="truncate">{item._id}</span>
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
                      {/* <td>
                        <span className="truncate">{item.customerid}</span>
                        <span className="copy" data-clipboard-text={item.customerid} onClick={(e) => {
                          // Copy the text to clipboard
                          navigator.clipboard.writeText(item.customerid);
                          // Replace "Copy" with "Copied!"
                          const copySpan = e.target;
                          copySpan.textContent = 'Copied!';
                          setTimeout(() => {
                            copySpan.textContent = 'Copy';
                          }, 1500);
                        }}>Copy</span>
                      </td> */}
                      <td>{item.customerid}</td>
                      {/* <td>
                        <span className="truncate">{item.payment}</span>
                        <span className="copy text-center" data-clipboard-text={item.payment} onClick={(e) => {
                          // Copy the text to clipboard
                          navigator.clipboard.writeText(item.payment);
                          // Replace "Copy" with "Copied!"
                          const copySpan = e.target;
                          copySpan.textContent = 'Copied!';
                          setTimeout(() => {
                            copySpan.textContent = 'Copy';
                          }, 1500);
                        }}>Copy</span>
                      </td> */}
                      <td>{item.payment}</td>
                      <td>{item.status}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString()} <br />{new Date(item.createdAt).toLocaleTimeString()}</td>
                      <td>{new Date(item.updatedAt).toLocaleDateString()} <br /> {new Date(item.updatedAt).toLocaleTimeString()}</td>
                      {/* Create a button to delete the product */}
                      {/* <td> <Link > <button className="btn bg-danger" onClick={(e) => {

                        onDeleteClick(item._id)
                      }}>Delete</button></Link>
                      </td> */}
                      <td>
                        <Link>
                          <button className="btn btn-light " onClick={(e) => onDeleteClick(item._id)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger trash-icon-hover' title="Delete" />
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
        <Link to="/addorder"><button className="btn text-right mr-5 bg-primary ml-19">Add Order</button></Link>
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
