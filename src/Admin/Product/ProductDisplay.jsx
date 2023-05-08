// Importing necessary libraries and modules
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import './UpdateProduct.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../Product/ProductDisplay.css'

// Importing functions from ProductService and ProductCategoryService
import { getAllCategoryById } from '../../services/Product/ProductCategoryService';
import { getBrandById } from '../../services/Product/ProductBrand';

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

    // Creating a navigate object
    const navigate = useNavigate();

    // Extracting id from the URL parameters using useParams hook
    const { id } = useParams();
    console.log(id);

    // Defining an asynchronous function to handle the update of a product
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            // Validating form data
            if (!Name || !Description || !category || !brand) {
                alert("Please fill all fields");
                return;
            }
            if (Quantity < 0 || Price < 0) {
                alert("Quantity and Price cannot be less than zero");
                return;
            }
            console.log(Name, Description, image, Quantity, Price, category, brand)
            // Calling updateProduct function from ProductService to update the product
            // await updateProduct(id, Name, Description, image, Quantity, Price, category, brand);
            await axios.put(`http://localhost:3009/product/products/${id}`, { Name, Description, image, Quantity, Price, category, brand });
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
            const { Name, Description, image, Quantity, Price, category, brand } = productResponse.data;
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
            const allCategory = await getAllCategoryById(category);
            const allBrand = await getBrandById(brand);

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
            <div>

                {/* new design */}
                <Card>
                    <Card.Body>
                        <Row>
                        <Col md={4}>
                        <label>Product Image : </label><br/>
                        <div  style={{height:'20%'}}><img src={image} style={{height:'22rem'}}/></div>
                        <br/>
                        </Col>
                        <Col md={8}>
                        <label><b>Product Id : </b></label><label>{id}</label>
                        <br/>
                        <label><b>Product Name : </b></label><label>{Name}</label>
                        <br/>
                        <label><b>Product Description : </b></label>{Description}
                        <br/>
                        <label><b>Product Price : </b></label>{Price}
                        <br/>
                        <label><b>Product Quantity : </b></label>{Quantity}
                        <br/>
                        <label><b>Product Brand : </b></label>{brandData.BrandName}
                        <br/>
                        <label><b>Product Category : </b></label>{categorydata.CategoryName}<br/>
                                <Link to={ `/navbar/product`}><button className='btn' style={{backgroundColor:'#AFAFAF'}}>Go Back</button></Link>
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
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

