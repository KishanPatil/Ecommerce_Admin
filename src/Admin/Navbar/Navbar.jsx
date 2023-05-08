import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../Navbar/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faStore, faBars, faFileInvoiceDollar, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import AdminDashboard from './AdminDashboard';
const Navbar = () => {
    const [_isLogin, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const _isLogin = localStorage.getItem('_isLogin');
        console.log("in navbar",_isLogin)
        setIsLoggedIn(_isLogin === 'true');
    }, []);
    const logoutUser = () => {
        localStorage.removeItem('_isLogin');
        setIsLoggedIn(false);
        setIsLoggedIn('');
        navigate('/');
    };
    return (_isLogin) ? (
        <>
           
        </>
    ) : (
        <>
             <div className='navbar-body'>
                {/* <h2 className='text-center mr-3'>Ecarto</h2> */}
                <div className='container-fluid mt-4 pt-1 container-background' >
                    <div className="row">
                        <nav className="col-md-2 col-lg-2 col-sm-2 d-md-block bg-light sidebar  ">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column  mt-5 navbar navbar-background ">
                                    <li className="nav-item">
                                        <Link className="nav-link mt-3 text-white" to="home"><FontAwesomeIcon icon={faHouse} />  Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="customer"> <FontAwesomeIcon icon={faUser} />  Customer </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white " to="product"><FontAwesomeIcon icon={faStore} />  Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="category"><FontAwesomeIcon icon={faBars} />   Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="brand"><FontAwesomeIcon icon={faBars} />   Brand</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to="cart">Cart</Link>
                                </li> */}
                                    {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to="payment"><FontAwesomeIcon icon={faFileInvoiceDollar}/>   Payment</Link>
                                </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="order"><FontAwesomeIcon icon={faCartShopping} />   Order</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faRightToBracket} /> <button class='btn btn-dark' onClick={logoutUser} style={{ textDecoration: 'none' }}>Logout</button></Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4 ">
                            <div id='outlet' className="row">
                                <div className='outlet col-md-12 ' style={{ overflowX: 'auto', width: '100%' }}>
                                    {/* <AdminDashboard/> */}
                                    <Outlet />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;

