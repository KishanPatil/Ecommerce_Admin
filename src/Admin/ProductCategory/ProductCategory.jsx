import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { getAllCategory, DeleteCategoryByID } from '../../services/Product/ProductCategoryService';
export default function ProductCategory() {
  const [category, setCategory] = useState([]);
  var count = 0
  useEffect(() => {
    const clipboard = new ClipboardJS('.copy');
    
    const fetchCategory = async () => {
      const Category = await getAllCategory();
      setCategory(Category);
      console.log(Category)
    };

    fetchCategory();
  }, []);


  const onDeleteClick = async (id) => {
    const ans = window.confirm('Can I Delete')
    if (ans) {
      await DeleteCategoryByID(id)
      const category = await getAllCategory();
      setCategory(category);
    }
  }
  if (category !== 0) {
    return (
      <div>
        {/* Adding a title and a button to add a new product */}
        <h2 className='text-center' >Category</h2><br />
        <div className='container text-center' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <div className='row d-flex justify-content-center align-items-center text-center'  style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='w-100 container d-flex justify-content-end'>
            <Link to="addCategory"><button className="btn" id='linkAdd' style={{ backgroundColor: '#AFAFAF' }}>Add Category</button></Link>
          </div>
          {/* <Link to="addproduct"><button className="btn" id='linkAdd' style={{backgroundColor:'#AFAFAF'}}>Add Product</button></Link><br /><br /> */}
             
            <div className='col-lg-9 col-md-8 col-sm-12'></div>

            {/* Creating a table to display the products */}
            <div className="container "  style={{ display:'flex', justifyContent:'center', alignItems:'center',maxWidth: "100%" }}>
              <br />
              <table className="table table-responsive">
                <thead style={{ backgroundColor: '#AFAFAF' }}>
                  {/* Creating table headers */}
                  <th scope="col ">#</th>
                  <th scope='col'> Product ID</th>
                  <th scope="col "> Image</th>
                  <th scope="col"> Name</th>
                  <th scope="col"> Action</th>
                  

                </thead>
                <tbody>
                  {category.map((item) => (

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
                      <td > <img src={item.image} alt="Product Image" style={{width:"20%", height:'10%'}} /></td>
                  
                      <td>{item.CategoryName}</td>


                      {/* <td><Link to={`updateCategory/${item._id}`}><button className="btn">update </button></Link></td>

                      <td> <Link > <button className="btn" onClick={(e) => {

                        onDeleteClick(item._id)
                      }}>Delete</button></Link>
                      </td> */}
                                        {/* Create a link to update the product */}
                  <td><Link to={`updatecategory/${item._id}`}><button className="btn"><FontAwesomeIcon icon={faEdit} className='text-primary trash-icon-hover' title="Update"/> </button></Link>
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
          </div >
        </div >
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
