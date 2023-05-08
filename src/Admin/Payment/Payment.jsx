import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Admin/Payment/Payment.css';
import { deletePaymentById, getAllPayments } from '../../../src/services/Payment/PaymentService'
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
function Payment({ payments }) {
  const [payment, setPayment] = useState([]);
  var count = 0
  useEffect(() => {
    // initialize clipboard
    const clipboard = new ClipboardJS('.copy');
    const fetchProducts = async () => {
      const allPayment = await getAllPayments();
      setPayment(allPayment);
      console.log(allPayment)
    };

    fetchProducts();
  }, []);
  const onDeleteClick = async (id) => {
    const ans = window.confirm('Do You Want To Delete')
    if (ans) {
      await deletePaymentById(id)
      const allProducts = await getAllPayments();
      setPayment(allProducts);
      console.log(allProducts)
    }
  }
  return (
    <div>
      {/* Adding a title and a button to add a new product */}
      <h2 className='text-center' >Payments</h2><br />
      <div className='container-fluid' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <div className='row  justify-content-center align-items-center text-center'>

          <div className='col-lg-9 col-md-8 col-sm-12'></div>

          {/* Creating a table to display the products */}
          <div className="container " style={{ maxWidth: "100%" }}>
            <br />
            <table className="table table-responsive table-striped">
              <thead style={{ backgroundColor: '#AFAFAF' }}>

                {/* Creating table headers */}
                <th scope="col">#</th>
                <th scope="col">Payment ID</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Payment Date</th>
                <th scope="col">Action</th>


              </thead>
              <tbody>
                {payment.map((item) => (

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
                    {/* <td>
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
                    </td> */}
                    <td>{item.customerId}</td>
                    <td>{item.Amount}</td>
                    <td>{item.Method}</td>
                    <td>{item.paymentStatus}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()} <br />{new Date(item.createdAt).toLocaleTimeString()}</td>
                    <td><Link to={`updatepayment/${item._id}`}><button className="btn"><FontAwesomeIcon icon={faEdit} className='text-primary trash-icon-hover' title="Update" />  </button></Link>
                      <Link>
                        <button className="btn " onClick={(e) => onDeleteClick(item._id)}>
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

export default Payment