import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAllBrand, deleteBrandByID } from '../../services/Product/ProductBrand';
export default function ProductBrand() {
  const [BrandName, setBrand] = useState([]);
  var count = 0
  useEffect(() => {
    const fetchCategory = async () => {
      const BrandName = await getAllBrand();
      setBrand(BrandName);
      console.log(BrandName)
    };

    fetchCategory();
  }, []);


  const onDeleteClick = async (id) => {
    const ans = window.confirm('Can I Delete')
    if (ans) {
      await deleteBrandByID(id)
      const BrandName = await getAllBrand();
      setBrand(BrandName);
    }
  }
  if (BrandName !== 0) {
    return (
      <div>
        {/* Adding a title and a button to add a new product */}
        <h2 className='text-center ' >Brand</h2><br />
        <div className='container text-center' style={{ display:'flex', justifyContent:'center', alignItems:'center' }} >
          <div className='row d-flex justify-content-center align-items-center text-center'>

            <div className='col-lg-12 col-md-8 col-sm-12' ></div>
            <div className='w-100 d-flex justify-content-end' >
            <Link to="addbrand"><button className="btn me-4" id='linkAdd' style={{backgroundColor:'#AFAFAF'}} >Add Brand</button></Link>
            </div>
       
            {/* Creating a table to display the products */}
            <div className="container " style={{ width: "100%" }}>
              <br />
              <table className="table table-responsive " style={{  justifyContent:'center', alignItems:'center',height:'100vh' }}>
                <thead style={{backgroundColor:'#AFAFAF'}}>

                  {/* Creating table headers */}
                  <th scope="col ">#</th>
                  <th scope="col ">Brand ID</th>
                  <th scope='col' style={{width:"10%",height:"10%"}}> Image</th>
                  <th scope="col"> Name</th>
                  <th scope="col"> Action</th>
                  

                </thead>
                <tbody>
                  {BrandName.map((item) => (

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
                      <td > <img src={item.image} alt="Product Image" style={{width:"50%", height:'80%'}} /></td>
                  
                      <td>{item.BrandName}</td>
                  <td><Link to={`updatebrand/${item._id}`}><button className="btn"><FontAwesomeIcon icon={faEdit} className='text-primary trash-icon-hover' title="Update"/> </button></Link>
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
