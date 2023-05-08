import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button,Row,Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addProducts } from '../../services/Product/ProductService';
import { getAllCategory } from '../../services/Product/ProductCategoryService';
import { getAllBrand } from '../../services/Product/ProductBrand'
import 'bootstrap/dist/css/bootstrap.css';    

function AddProduct() {
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

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        console.log({ Name, Description, Quantity, Price, category, brand });
       
       
        const formData = new FormData();
        formData.append('Name', Name);
        formData.append('Description', Description);
        formData.append('image', image);
        formData.append('Quantity', Quantity);
        formData.append('Price', Price);
        formData.append('category', category);
        formData.append('brand', brand);

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
      // if (image && !image.match(/\.(jpg|jpeg|png|gif)$/)) {
      //   errors.image = 'Invalid image file format';
      // }
  
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }
        const add = await addProducts(Name, Description, image, Quantity, Price, category, brand)
        alert("Product Added successfully!");
        navigate('/navbar/product')
    }

    useEffect(() => {
        async function fetchData() {
            const allCategory = await getAllCategory();
            const allBrand = await getAllBrand();
            setCategorydata(allCategory);
            setBrandData(allBrand);
            setIsLoading(true);
        }
        fetchData();
    }, []);


  // Rendering the UpdateProduct component
  if (isLoading) {
    return (
      <div style={{fontSize:"0.9rem"}}>
        <h2 className="text-center">Add Product</h2>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center" style={{fontSize:"1rem"}}>

          </div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-light">
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                
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
                            <option value={categorydata[key]._id} key={key}>{categorydata[key].CategoryName}</option>
                          ))}

                        </Input>
                        {errors.category && <div className="text-danger">{errors.category}</div>}
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
                <Button color="primary">Add </Button>
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


export default AddProduct;

