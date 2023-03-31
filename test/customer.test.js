const mongoose = require('mongoose');
const axios = require('axios');
const app = require('../server');

// 1) Get All Brand

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/customer/getallcustomers');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/customer/getallcustomers');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/customer/getallcustomers');
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



// Get customer by id


describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.get('http://localhost:3009/customer/getCustomerById/641bfd956b73863dca9445ee');
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.get('http://localhost:3009/customer/getCustomerById/641bfd956b73863dca9445ee');
      expect(response.data).not.toBeNull();
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.get('http://localhost:3009/customer/getCustomerById/641bfd956b73863dca9445ee');
            } catch (error) {
              expect(error.response.status).toBe(400);
            }
      });
    });
  
// Add customer 


describe('to check if the status code is correct or not', () => {
    it('should return a code of 200...', async () => {
      const newCustomer = {
        Dummy_Customer: "JEST TEST CUSTOMER"
      };
      const response = await axios.post('http://localhost:3009/customer/addcustomer', newCustomer);
      expect(response.status).toBe(200);
    });
  });
  
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
        const newCustomer = {
            Dummy_Customer: "JEST TEST CUSTOMER"
          };
          const response = await axios.post('http://localhost:3009/customer/addcustomer', newCustomer);
      expect(response.data).not.toBeNull();
    });
  });
  
  
  describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.post('http://localhost:3009/customer/addcustomer_false');
          } catch (error) {
            expect(error.response.status).toBe(404);
          }
    });
  });

// Uopdate customer 


describe('to check if the status code for Update is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newCustomer = {
      Dummy_Customer: "JEST TEST CUSTOMER"
    };
    const response = await axios.put('http://localhost:3009/customer/updatecustomer/641bfd336b73863dca9445e8', newCustomer);
    expect(response.status).toBe(200);
  });
});

describe('to check if the response for Update is not null', () => {
  it('should not return null ', async () => {
    const newCustomer = {
      Dummy_Customer: "JEST TEST CUSTOMER"
    };
    const response = await axios.put('http://localhost:3009/customer/updatecustomer/641bfd336b73863dca9445e8', newCustomer);
    expect(response.status).toBe(200);
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
        const newCustomer = {
          Dummy_Customer: "JEST TEST CUSTOMER"
        };
          await axios.put('http://localhost:3009/customer/updatecustomer/641bfd336b73863dca9445e8', newCustomer);
        } catch (error) {
          expect(error.response.status).toBe(400);
        }
  });
});

// get customer by email               http://localhost:3009/customer/getcustomerbyemail/Pradeep@gmail.com



describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/customer/getcustomerbyemail/Pradeep@gmail.com');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/customer/getcustomerbyemail/Pradeep@gmail.com');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/customer/getcustomerbyemail/Pradeep@gmail.com');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });

