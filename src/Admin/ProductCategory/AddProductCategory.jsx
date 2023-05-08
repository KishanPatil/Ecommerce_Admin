import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AddCategory } from '../../services/Product/ProductCategoryService';
import 'bootstrap/dist/css/bootstrap.css';

function AddProductCategory() {
  const [CategoryName, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const add = await AddCategory(CategoryName, image);
      alert("Category Added successfully!");
      navigate('/navbar/category')
    }
  }

  function validateForm() {
    let errors = {};
    if (!CategoryName.trim()) {
      errors.CategoryName = 'Category name is required';
    }
    if (!image.trim()) {
      errors.image = 'Image URL is required';
    }
    return errors;
  }

  return (
    <div>
      <h2 className="text-center">Add Category</h2>
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">

        </div>
        <div className="row">
          <div className="col-md-6 mx-auto bg-light ">
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className='mainForm'>
                  <FormGroup>
                    <Label for="name">Category Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Category Name" value={CategoryName} invalid={!!formErrors.CategoryName} onChange={(e) => setName(e.target.value)} />
                    {formErrors.CategoryName && <span className="text-danger">{formErrors.CategoryName}</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="image">Category Image Url</Label>
                    <Input type="text" name="image" id="image" placeholder="Image URL" value={image} invalid={!!formErrors.image} onChange={(e) => setImage(e.target.value)} />
                    {formErrors.image && <span className="text-danger">{formErrors.image}</span>}
                  </FormGroup>
                </div>
                <div className='col'>
                  <Button color="primary">Submit</Button>
                  <Link to={`/navbar/category`}><button className="btn">Cancel</button></Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductCategory;
