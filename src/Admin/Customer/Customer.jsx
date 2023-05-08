import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCustomer, deleteCustomerByID } from '../../services/Customer/CustomerService';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Admin/Customer/Customer.css';
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Customer() {
  var count = 0;
  const [customer, setProducts] = useState([]);
  var count = 0
  useEffect(() => {
    // initialize clipboard
    const clipboard = new ClipboardJS('.copy');
    const fetchProducts = async () => {
      const allCustomer = await getCustomer();
      setProducts(allCustomer);
      console.log(allCustomer)
    };

    fetchProducts();
  }, []);


  const onDeleteClick = async (id) => {
    const ans = window.confirm('Can i Delete')
    if (ans) {
      await deleteCustomerByID(id)
      const allCustomer = await getCustomer();
      setProducts(allCustomer);
    }
  }
  return (
    <>
      <div className='customer-body'>
        {/* Adding a title */}
        <h2 className='text-center' >Customer</h2><br />
        <div className='container' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <div className='row  justify-content-center align-items-center text-center' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>

            <div className='col-lg-9 col-md-8 col-sm-12' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}></div>

            {/* Creating a table to display the products */}
            <div className="table-container" style={{maxWidth:'100%' }}>
              <br />
              <table className="table table-responsive table-striped ">
                <thead >

                  {/* Creating table headers */}
                  <th scope="col ">#</th>
                  <th scope="col ">Customer ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Pin Code</th>
                  <th scope="col">Action</th>

                </thead>
                {customer.map((item) => (

                  <tr key={item._id}>
                    <td>{count = count + 1}</td>
                    
                    <td>{item._id}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                   
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.pincode}</td>
                    
                    <td>
                        <Link>
                          <button className="btn btn-light " onClick={(e) => onDeleteClick(item._id)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger trash-icon-hover' title="Delete"/>
                          </button>
                        </Link>
                      </td>
                  </tr>
                )
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}