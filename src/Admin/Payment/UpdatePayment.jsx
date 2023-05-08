// Importing necessary libraries and modules
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Admin/Payment/UpdatePayment.css'
import { useParams, Link, useNavigate } from 'react-router-dom';

// Importing functions from updatePaymentById and ProductCategoryService
import { updatePaymentById } from '../../services/Payment/PaymentService';

// Defining UpdatePayment component
function UpdatePayment() {
  // Initializing state variables
  const [paymentStatus, setPaymentStatus] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // Creating a navigate object
  const navigate = useNavigate();

  // Extracting id from the URL parameters using useParams hook
  const { id } = useParams();

  // Defining an asynchronous function to handle the update of a payment
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      // Validating form data
      if (!paymentStatus) {
        alert("Please fill all fields");
        return;
      }

      // Calling updatePayment function from ProductService to update the payment
      await updatePaymentById(id, paymentStatus);
      alert("Payment updated successfully!");

      // Navigating to the payment page
      navigate('/navbar/payment');
    } catch (error) {
      console.log(error);
    }
  }

  // Defining a useEffect hook to fetch data
  useEffect(() => {
    // Defining an asynchronous function to fetch data
    async function fetchData() {
      // Fetching papment data using axios library
      const paymentResponse = await axios.get(`http://localhost:3009/payment/getPaymentById/${id}`);
      const { paymentStatus } = paymentResponse.data;

      // Setting state variables with the fetched data
      setPaymentStatus(paymentStatus);
      setIsLoading(true);
    }
    // Calling the fetchData function
    fetchData();
  }, []);

  // Rendering the UpdatePayment component
  if (isLoading) {
    return (
     
      <div>
        <h2 className="text-center">Update Payment</h2>
      <div className="container" >
  <div className="row d-flex justify-content-center mb-5 align-items-center">
    
  </div>
  <div className="row">
    <div className="col-md-6 mx-auto">
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="payment-status">Payment Status</label>
          <input type="text" name="payment-status" id="payment-status" className="form-control" placeholder="Enter payment status" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-info mr-3">Submit</button>
          <Link to="/navbar/payment" className="btn btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
    );
  }
  else {
    return (
      <div>
        PLease WAit
      </div>
    )
  }

}

export default UpdatePayment;

