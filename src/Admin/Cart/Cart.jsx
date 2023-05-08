import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllCarts, deleteCart } from '../../services/Cart/CartService'
import ClipboardJS from 'clipboard';
import '../../Admin/Cart/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// Defining a functional component called "Cart"
function Cart() {
  // Setting up state using the "useState" hook
  const [cart, setCart] = useState([]);
  // Setting up a variable called "count"
  var count = 0
  // Using the "useEffect" hook to fetch all Cart
  useEffect(() => {
    // initialize clipboard
    const clipboard = new ClipboardJS('.copy');
    // Defining an asynchronous function to fetch all carts
    const fetchCart = async () => {
      // Calling the "getAllCArt" function from the cart service
      const allCart = await getAllCarts();
      // Setting the products state using the fetched products
      setCart(allCart);
      // Logging all products to the console
      console.log(allCart)
    };
    // Calling the fetchCart function
    fetchCart();
    // clean up
    return () => {
      clipboard.destroy();
    };
  }, []);
  // Defining a function to handle delete cart button clicks
  const onDeleteClick = async (id) => {
    // Displaying a confirmation dialog box
    const ans = window.confirm('Do You Want To Delete')
    // If the user confirms the deletion
    if (ans) {
      // Deleting the product using the "deleteCart" function from the product service
      await deleteCart(id)
      // Fetching all cart after the deletion
      const allCart = await getAllCarts();
      // Setting the carts state using the fetched products
      setCart(allCart);
    }
  }
  // Rendering the cart list and delete button for each product
  if (cart.length > 0) {
    return (
      <div>
        {/* Adding a title  */}
        <h2 className='text-center' >Cart</h2><br />
        <div className='container-fluid' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <div className='row  justify-content-center align-items-center text-center'>

            <div className='col-lg-9 col-md-8 col-sm-12'></div>

            {/* Creating a table to display the products */}
            <div className="container " style={{ width: "100%" }}>
              <br />
              <table className="table table-responsive table-striped ">
                <thead style={{ backgroundColor: '#009879' }}>
                  <th scope="col"> Count</th>
                  <th scope="col"> Cart ID</th>
                  <th scope="col">Customer ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Delete</th>

                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>{count = count + 1}</td>
                      <td>
                        <span className="truncate">{item._id}</span><br />
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
                      </td>
                      <td>
                        <span className="truncate">{item.customerId}</span> <br />
                        <span className="copy" data-clipboard-text={item.customerId} onClick={(e) => {
                          // Copy the text to clipboard
                          navigator.clipboard.writeText(item.customerId);
                          // Replace "Copy" with "Copied!"
                          const copySpan = e.target;
                          copySpan.textContent = 'Copied!';
                          setTimeout(() => {
                            copySpan.textContent = 'Copy';
                          }, 1500);
                        }}>Copy</span>
                      </td>
                      <td>
                        <span className="truncate">{item.products[0]?.productid}</span> <br />
                        <span className="copy" data-clipboard-text={item.products[0]?.productid} onClick={(e) => {
                          // Copy the text to clipboard
                          navigator.clipboard.writeText(item.products[0]?.productid);
                          // Replace "Copy" with "Copied!"
                          const copySpan = e.target;
                          copySpan.textContent = 'Copied!';
                          setTimeout(() => {
                            copySpan.textContent = 'Copy';
                          }, 1500);
                        }}>Copy</span>
                      </td>
                      <td>{item.products[0]?.quantity}</td>
                      <td>
                        <Link>
                          <button className="btn btn-light " onClick={(e) => onDeleteClick(item._id)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger trash-icon-hover' title="Delete" />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    <div>
      {/* Adding a title  */}
      <h2 className='text-center' >Cart</h2><br />
      <div className='container-fluid'>
        <div className='row  justify-content-center align-items-center text-center'>

          <div className='col-lg-9 col-md-8 col-sm-12'></div>

          {/* Creating a table to display the products */}
          <div className="container " style={{ Width: "100%" }}>
            <br />
            <table className="table table-responsive table-striped ml-5">
              <thead style={{ backgroundColor: '#009879' }}>
                <th scope="col"> Count</th>
                <th scope="col"> Cart ID</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>

              </thead>
              <tbody>
                <h2>No Data found</h2>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Cart