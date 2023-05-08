import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { updateCategory } from '../../services/Product/ProductCategoryService';

function UpdateCategory() {
  const [CategoryName, setName] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const { id } = useParams();
  
  async function handleUpdate(e) {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      try {
        await updateCategory(id, CategoryName, image)
        alert("Category updated successfully!");
        navigate('/navbar/category')
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(errors);
    }
  }

  function validate() {
    const errors = {};

    if (!CategoryName) {
      errors.CategoryName = 'Name is required';
    }

    if (!image) {
      errors.image = 'Image url is required';
    }

    return errors;
  }

  useEffect(() => {
    async function fetchData() {
      const categoryResponse = await axios.get(`http://localhost:3009/category/getcategoriesbyid/${id}`);
      const { CategoryName ,image} = categoryResponse.data;
      console.log(categoryResponse.data)
      setName(CategoryName);
      setImage(image)
      setIsLoading(true);
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-center">Update Category</h2>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">

          </div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-light ">
              <Form onSubmit={handleUpdate}>
                <div className="form-group">
                  <div className='mainForm'>
                  <FormGroup>
                    <Label for="name">ID</Label>
                    <Input type="id" name="id" id="id" placeholder="Category id" value={id} disabled />
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Category Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Category  Name" value={CategoryName} invalid={!!errors.CategoryName} onChange={(e) => setName(e.target.value)} />
                    {errors.CategoryName && <div className="invalid-feedback">{errors.CategoryName}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Image url</Label>
                    <Input type="text" name="image" id="image" placeholder="Category image url" value={image} invalid={!!errors.image} onChange={(e) => setImage(e.target.value)} />
                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                  </FormGroup>
                </div>
                <Button color="primary">Update</Button>
                <Link to={`/navbar/category`}><button className="btn">Cancel</button></Link>
              </div></Form>
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

export default UpdateCategory;
