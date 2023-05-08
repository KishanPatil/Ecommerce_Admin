import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { addBrand } from '../../services/Product/ProductBrand';

function AddProductBrand() {
  const [BrandName, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const add = await addBrand(BrandName, image);
      alert('Brand added successfully!');
      navigate('/navbar/brand');
    } else {
      setFormErrors(errors);
    }
  }

  function validateForm() {
    let errors = {};
    if (!BrandName.trim()) {
      errors.BrandName = 'Brand name is required';
    }
    if (!image.trim()) {
      errors.image = 'Brand image URL is required';
    }
    return errors;
  }

  if (isLoading) {
    return (
      <div style={{ fontSize: '0.9rem' }}>
        <h2 className="text-center">Add Brand</h2>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center" style={{ fontSize: '1rem' }}></div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-light">
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <FormGroup>
                    <Label for="name">Brand Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="BrandName Name"
                      value={BrandName}
                      invalid={!!formErrors.BrandName}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <FormFeedback>{formErrors.BrandName}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="image">Brand Image URL</Label>
                    <Input
                      type="text"
                      name="image"
                      id="image"
                      placeholder="Brand Image URL"
                      value={image}
                      invalid={!!formErrors.image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <FormFeedback>{formErrors.image}</FormFeedback>
                  </FormGroup>
                </div>
                <div className="col">
                  <Button color="primary">Submit</Button>
                  <Link to={`/navbar/brand`}>
                    <button className="btn">Cancel</button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Please wait</div>;
  }
}

export default AddProductBrand;
