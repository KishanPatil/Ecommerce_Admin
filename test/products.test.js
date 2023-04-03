/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require('mongoose');
const axios = require('axios');
const app = require('../server');

// 1) Get All Products 

describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.get('http://localhost:3009/product/getAllProducts');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/product/getAllProducts');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/product/getAllProducts');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });



// Check Connection

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
      


//  get product by id 

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/product/getProductById/641429c239a20ebefb58e7d0');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/product/getProductById/641429c239a20ebefb58e7d0');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/product/getProductById/641429c239a20ebefb58e7d0');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });




// Delete product By Id 
  
  describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.delete('http://localhost:3009/product/deleteproductbyId/641ae9f492d37131d8debb08');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.delete('http://localhost:3009/product/deleteproductbyId/641ae9f492d37131d8debb08');
      expect(response.data).not.toBe(null);
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.delete('http://localhost:3009/product/deleteproductbyId/641ae9f492d37131d8debb08');
            } catch (error) {
              expect(error.response.status).toBe(404);
            }
      });
    });




// UPDATE PRODUCT BY ID 

describe('to check if the status code for Update is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newProduct = {
      Name: "jEST UPDATE TEST PRODUCT"
    };
    const response = await axios.put('http://localhost:3009/product/updateproduct/641ae9cb92d37131d8debb04', newProduct);
    expect(response.status).toBe(200);
  });
});

describe('to check if the response for Update is not null', () => {
  it('should not return null ', async () => {
    const newProduct = {
      Name: "jEST UPDATE TEST PRODUCT"
    };
    const response = await axios.put('http://localhost:3009/product/updateproduct/641ae9cb92d37131d8debb04', newProduct);
    expect(response.status).toBe(200);
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
        const newProduct = {
          Name: "jEST UPDATE TEST PRODUCT"
        };
        const response = await axios.put('http://localhost:3009/product/updateproduct/641ae9cb92d37131d8debb04', newProduct);
        } catch (error) {
          expect(error.response.status).toBe(400);
        }
  });
});

