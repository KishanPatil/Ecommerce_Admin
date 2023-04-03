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
    const response = await axios.get('http://localhost:3009/order/getallorder');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/order/getallorder');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/order/getallorder');
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
      const response = await axios.get('http://localhost:3009/order/getorderbyid/641af120c1e71d9392a53d03');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/order/getorderbyid/641af120c1e71d9392a53d03');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/order/getorderbyid/641af120c1e71d9392a53d03');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });



// get order by customer id

describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.get('http://localhost:3009/order/getorderbycustomerid/6414aa2570d3c956e04ad5ec');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/order/getorderbycustomerid/6414aa2570d3c956e04ad5ec');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/order/getorderbycustomerid/6414aa2570d3c956e04ad5ec');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });

// Add Order 

describe('to check if the status code is correct or not', () => {
    it('should return a code of 200...', async () => {
      const newOrder = {
        Dummy_Order: "JEST TEST ORDER"
      };
      const response = await axios.post('http://localhost:3009/order/addorder', newOrder);
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
        const newOrder = {
            Dummy_Order: "JEST TEST ORDER"
          };
          const response = await axios.post('http://localhost:3009/order/addorder', newOrder);
      expect(response.data).not.toBeNull();
    });
  });
  

// Update order



describe('to check if the status code for Update is correct or not', () => {
    it('should return a code of 200...', async () => {
      const response = await axios.put('http://localhost:3009/order/updateorder/641af120c1e71d9392a53d03');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if the response for Update is not null', () => {
    it('should not return null ', async () => {
      const response = await axios.put('http://localhost:3009/order/updateorder/641af120c1e71d9392a53d03');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.put('http://localhost:3009/order/updateorder/641af120c1e71d9392a53d03');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });
  

// delete order 

describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.delete('http://localhost:3009/order/deleteorderbyid/641af1eea86bb79447c24419');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.delete('http://localhost:3009/order/deleteorderbyid/641af1eea86bb79447c24419');
      expect(response.data).not.toBe(null);
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.delete('http://localhost:3009/order/deleteorderbyid/641af1eea86bb79447c24419');
            } catch (error) {
              expect(error.response.status).toBe(404);
            }
      });
    });
