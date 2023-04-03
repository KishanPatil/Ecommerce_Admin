/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require('mongoose');
const axios = require('axios');
const app = require('../server');

// 1) Get All Category

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/category/getAllCategory');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/category/getAllCategory');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/category/getAllCategory');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });
/*
  describe('to check if the data is valid', () => {
    it('should return an array of objects with string and number fields', async () => {
      const response = await axios.get('http://localhost:3009/brand/getAllBrands/');
      expect(Array.isArray(response.data)).toBe(true);
  
      response.data.forEach((item) => {
        expect(typeof item.BrandName).toBe('string');

      });
    });
  });
*/

describe(' to check is database connection is connected or not ', () => {
  beforeEach(async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/ecomerce');
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it('should connect to the database', async () => {
    expect(mongoose.connection.readyState).toBe(1); // 1 means connected
  });
});



/*
describe('To check if name is present in params Or is there in response ', () => {
  it('should return a brand with an brand info ', async () => {
    const response = await axios.get('http://localhost:3009/brand/getAllBrands/OnePlus');
    expect(response.config.url).toMatch(/\/brand\/OnePlus$/);
    expect(response.data.length).toBeGreaterThan(0);
  });
 });
//    const response = await axios.get('http://localhost:3009/productbrand/Nokia');
*/ 


// 2) Create Brand

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newCategory = {
        CategoryName: 'New test Category',
        image: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png"
    };
    const response = await axios.post('http://localhost:3009/category/addCategory', newCategory);
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const newCategory = {
        CategoryName: 'New test Category',
        image: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png"
    };
    const response = await axios.post('http://localhost:3009/category/addCategory', newCategory);
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
          await axios.post('http://localhost:3009/category/addCategory_false');
        } catch (error) {
          expect(error.response.status).toBe(404);
        }
  });
});



// Get Category By ID 


describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/category/getCategoryById/641436c77cc499649b1f29a6');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/category/getCategoryById/641436c77cc499649b1f29a6');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/category/getCategoryById/641436c77cc499649b1f29a6');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });


// //update Category By Id 

// describe('to check if the status code is correct or not', () => {
//   it('should return a code of 200', async () => {
//     const response = await axios.put('http://localhost:3055/productbrand/6404a677b1f87e114d61243f');
//     expect(response.status).toBe(200);
//   });
// });


describe('to check if the status code for Update is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newCategory = {
      CategoryName: 'New test Brand',
      image: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png"
    };
    const response = await axios.put('http://localhost:3009/category/updateCategory/641316e800349749e4ae6cd8', newCategory);
    expect(response.status).toBe(200);
  });
});

describe('to check if the response for Update is not null', () => {
  it('should not return null ', async () => {
    const newCategory = {
      CategoryName: 'New test Brand',
      image: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png"
    };
    const response = await axios.put('http://localhost:3009/category/updateCategory/641316e800349749e4ae6cd8', newCategory);
    expect(response.status).toBe(200);
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
        const newCategory = {
          CategoryName: 'New test Brand'
        };
          await axios.put('http://localhost:3009/category/getCategoryById/641316e800349749e4ae6cd9', newCategory);
        } catch (error) {
          expect(error.response.status).toBe(404);
        }
  });
});




//   // delete Category by id

  describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.delete('http://localhost:3009/category/deleteCategory/641ad4c0afb30df118de02e0');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.delete('http://localhost:3009/category/deleteCategory/641ad4c0afb30df118de02e0');
      expect(response.data).toBe("");
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.delete('http://localhost:3009/category/deleteCategory/641ad4c0afb30df118de02e0');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });






