import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { updateBrand } from '../../services/Product/ProductBrand';

function UpdateProductBrand() {
  const [BrandName, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  async function handleUpdate(e) {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        await updateBrand(id, BrandName, image);
        alert('Brand updated successfully!');
        navigate('/navbar/brand');
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(errors);
    }
  }

  function validate() {
    const errors = {};
    if (!BrandName) {
      errors.brandName = 'Brand Name is required';
    }
    if (!image) {
      errors.image = 'Image url is required';
    }
    return errors;
  }

  useEffect(() => {
    async function fetchData() {
      const brandResponse = await axios.get(`http://localhost:3009/brand/brands/${id}`);
      const { BrandName, image } = brandResponse.data;
      setName(BrandName);
      setImage(image);
      setIsLoading(true);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-center">Update Brand</h2>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center"></div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-light ">
              <Form onSubmit={handleUpdate}>
                <div className="form-group">
                  <div className="mainForm">
                    <FormGroup>
                      <Label for="name">Brand ID</Label>
                      <Input type="id" name="id" id="id" placeholder="Brand id" value={id} disabled />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Brand Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Brand Name"
                        value={BrandName}
                        onChange={(e) => setName(e.target.value)}
                        invalid={!!errors.brandName}
                      />
                      {errors.brandName && <div className="invalid-feedback">{errors.brandName}</div>}
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Image url</Label>
                      <Input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Brand image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        invalid={!!errors.image}
                      />
                      {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                    </FormGroup>
                  </div>
                  <Button color="primary">Update</Button>
                  <Link to={`/navbar/brand`}>
                    <button className="btn">Cancel</button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}
};

export default UpdateProductBrand;
