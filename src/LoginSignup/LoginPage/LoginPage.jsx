import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginPage = () => {

  let _isLogin = localStorage.getItem('_isLogin') === 'false';
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const correctEmail = "admin@gmail.com";
  const correctPassword = "Admin@12";

  const isValidEmail = (adminName) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(adminName);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    return passwordRegex.test(password)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setAdminName(adminName);
    console.log("OnSubmit() CALLED ");
    console.log("entered email : " + adminName);
    console.log("entered password : " + password);


    checklogin();
  };


  function checklogin() {
    if (adminName === "") alert(" Please enter email ");
    else if (password === "") alert(" Please enter password ");
    else {
      if (adminName === correctEmail && password === correctPassword) {
        console.log("LOG IN SUCCESSFULLY");
        console.log(_isLogin);
        localStorage.setItem('isLoggedIn', true); // set to true when user logs in
        console.log(_isLogin);

        navigate('/navbar/home');
      }
      else {
        console.log("FAILED TO LOGIN");
        // navigate('/Blogs');
        alert("Failed to Login!! Incorrect Username or Password");
      }
    }

    if (!isValidEmail(adminName)) {
      alert('Email is not in valid format')
      return;
    }
    if (!isValidPassword(password)) {
      alert('Enter the password contains special characters')
      return;
    }

  }


  const goToHome = () => {
    navigate("/");
  }

  const inputEventone = (event) => {
    console.log(event.target.value);
    setAdminName(event.target.value);
    // adminName = event.target.value;
  }

  const inputEventonetwo = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value);
  }
  return (
    <>
      <div className=" border border-dark me-5 ms-5 mx-5 mt-5">
        <div className="container-fluid h-custom ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={onSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3"> <h3>Please Log in </h3></p>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    value={adminName}
                    onChange={inputEventone}
                    placeholder="Enter a valid email address" />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    value={password}
                    onChange={inputEventonetwo}
                    placeholder="Enter password" />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2 row">
                  <div class="col-3">
                    <button type="submit" className="btn btn-primary btn-lg mr-1" >Login</button>
                  </div>
                  <div class="col-3">
                    <button className='btn btn-light btn-lg border border-dark mb-4' onClick={(e) => {
                      e.preventDefault()
                      goToHome()
                    }} >Cancel</button>
                  </div>

                </div>

              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-primary border border-dark">
          <div className="text-white mb-2 mb-md-0 text-center">
            Copyright © 2023. All rights reserved.
          </div>
        </div>
      </div>

    </>
  );
}

export default LoginPage;

