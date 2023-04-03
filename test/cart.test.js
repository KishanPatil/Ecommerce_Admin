/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
const mongoose = require('mongoose');
const axios = require('axios');
const app = require('../server');

// 1) Get All Order

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/cart/getallcart');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/cart/getallcart');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/cart/getallcart');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });


// Check Connaection

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


// get order be id      http://localhost:3009/order/getorderbyid/6418bd925c86ca7a478856ac


describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.get('http://localhost:3009/cart/getcartbyid/6417e8b3e9445cecd1ecd14e');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/cart/getcartbyid/6417e8b3e9445cecd1ecd14e');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/cart/getcartbyid/6417e8b3e9445cecd1ecd14e');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });


// get cart bu Customer id        http://localhost:3009/cart/getcartbycustomerid/6414aa2570d3c956e04ad5ec


describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.get('http://localhost:3009/cart/getcartbycustomerid/6414aa2570d3c956e04ad5ec');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/cart/getcartbycustomerid/6414aa2570d3c956e04ad5ec');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/cart/getcartbycustomerid/6414aa2570d3c956e04ad5ec');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });


// Delete cart             641afa7ab08c6d8dafc7e2b6         localhost:3009/cart/deletecartbyid/641afd802996d1f955362a16

describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.delete('http://localhost:3009/cart/deletecartbyid/641afd802996d1f955362a16');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.delete('http://localhost:3009/cart/deletecartbyid/641afd802996d1f955362a16');
      expect(response.data).not.toBe(null);
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.delete('http://localhost:3009/cart/deletecartbyid/641afd802996d1f955362a16');
            } catch (error) {
              expect(error.response.status).toBe(404);
            }
      });
    });

