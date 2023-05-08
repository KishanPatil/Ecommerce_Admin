// Importing necessary libraries and modules
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import './UpdateProduct.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Importing functions from ProductService and ProductCategoryService
import { updateProduct } from '../../services/Product/ProductService';
import { getAllCategory } from '../../services/Product/ProductCategoryService';
import { getAllBrand } from '../../services/Product/ProductBrand';

// Defining UpdateProduct component
function UpdateProduct() {
  // Initializing state variables
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [Quantity, setQuantity] = useState(0);
  const [Price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [brandData, setBrandData] = useState([]);
  const [categorydata, setCategorydata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  

  // Creating a navigate object
  const navigate = useNavigate();

  // Extracting id from the URL parameters using useParams hook
  const { id } = useParams();
  console.log(id);
  
  // Defining an asynchronous function to handle the update of a product
  async function handleUpdate(e) {
    e.preventDefault();

         //validation for the fields should not be empty
         const errors = {};
         if (!Name) {
           errors.name = 'Please enter a product name';
         }
     
         if (!Description) {
           errors.description = 'Please enter a product description';
         }
         
         if (!category) {
           errors.category = 'Please select a product category';
         }
     
         if (!brand) {
           errors.brand = 'Please select a product brand';
         }
     
         if(!image){
           errors.image = 'Please enter image url';
         }
     
         //validation for Quantity and Price cannot be less than zero
         if (Quantity < 1 || Price < 1) {
           errors.quantityPrice = 'Quantity and price cannot be less than zero';
         }
     
         //validation for Quantity and Price must be number
         if (isNaN(Quantity) || isNaN(Price)) {
           errors.quantityPrice = 'Quantity and price must be numbers';
         }
     
           //validation for image format
          //  if (image && !image.match(/\.(jpg|jpeg|png|gif)$/)) {
          //    errors.image = 'Invalid image file format';
          //  }
       
           if (Object.keys(errors).length > 0) {
             setErrors(errors);
             return;
           }
   
    try {
     
      console.log(Name,Description,image,Quantity,Price, category, brand)
      // Calling updateProduct function from ProductService to update the product
      // await updateProduct(id, Name, Description, image, Quantity, Price, category, brand);
      await axios.put(`http://localhost:3009/product/products/${id}`,{Name,Description,image,Quantity,Price, category, brand});
      alert("Product updated successfully!");

      // Navigating to the Product page
      navigate('/navbar/product');
    } catch (error) {
      console.log(error);
    }
  }

  // Defining a useEffect hook to fetch data
  useEffect(() => {
    // Defining an asynchronous function to fetch data
    async function fetchData() {
      // Fetching product data using axios library
     
      const productResponse = await axios.get(`http://localhost:3009/product/products/${id}`);
      const { Name, Description,image, Quantity, Price, category, brand } = productResponse.data;
      console.log(productResponse.data)
      console.log(Name)
      // Setting state variables with the fetched data
      setName(Name);
      setDescription(Description);
      setImage(image);
      setQuantity(Quantity);
      setPrice(Price);
      setCategory(category);
      setBrand(brand);

      // Fetching category and brand data using functions from ProductService and ProductCategoryService
      const allCategory = await getAllCategory();
      const allBrand = await getAllBrand();

      // Setting state variables with the fetched data
      setCategorydata(allCategory);
      setBrandData(allBrand);
      setIsLoading(true);
    }
    // Calling the fetchData function
    fetchData();
  }, []);
  console.log(typeof categorydata);


  // Rendering the UpdateProduct component
  if (isLoading) {
    return (
      <div style={{fontSize:"0.9rem"}}>
        <h2 className="text-center">Update Product</h2>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center" style={{fontSize:"1rem"}}>

          </div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-light">
              <Form onSubmit={handleUpdate}>
                <div className="form-group">
                <FormGroup>
                    <Label for="name">ID</Label>
                    <Input type="id" name="id" id="id" placeholder="Product id" value={id} disabled />
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Product Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Product Description" value={Description} onChange={(e) => setDescription(e.target.value)} />
                    {errors.description && <div className="text-danger">{errors.description}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Image url</Label>
                    <Input type="text" name="image" id="image" placeholder="Product image url" value={image} onChange={(e) => setImage(e.target.value)} />
                    {errors.image && <div className="text-danger">{errors.image}</div>}
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup >
                        <Label for="quantity">Quantity</Label>
                        <Input type="number" name="quantity" id="quantity" placeholder="Product Quantity" value={Quantity} onChange={(e) => setQuantity(e.target.value)} />
                        {errors.quantityPrice && <div className="text-danger">{errors.quantityPrice}</div>}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="number" name="price" id="price" placeholder="Product Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                        {errors.quantityPrice && <div className="text-danger">{errors.quantityPrice}</div>}
                      </FormGroup>


                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="category">Category</Label><br />
                        <Input type="select" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                          <option>Select Category</option>
                          {Object.keys(categorydata).map(key => (
                            <option value={categorydata[key]._id} key={key}>{categorydata[key]?.CategoryName}</option>
                          ))}
                           {errors.category && <div className="text-danger">{errors.category}</div>}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label className='' for="brand">Brand</Label><br />
                        <Input type="select" name="brand" id="brand" placeholder="Product Brand" value={brand} onChange={(e) => setBrand(e.target.value)} >
                          <option>Select Brand</option>
                          {Object.keys(brandData).map(key => (
                            <option  value={brandData[key]._id} key={key}>{brandData[key].BrandName}</option>
                          ))}
                        </Input>
                        {errors.brand && <div className="text-danger">{errors.brand}</div>}
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <Button color="primary">Update</Button>
                <Link to={`/navbar/product`}><button className="btn ml-2">Cancel</button></Link>
              </Form>
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

export default UpdateProduct;


