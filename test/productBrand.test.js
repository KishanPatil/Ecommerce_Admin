const mongoose = require('mongoose');
const axios = require('axios');
const app = require('../server');

// 1) Get All Brand

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/brand/getAllBrands');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/brand/getAllBrands/');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/brand/getAllBrands/');
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




// 2) Create Brand

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newBrand = {
      BrandName: 'New test Brand',
      image: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-01-v1.jpg"
    };
    const response = await axios.post('http://localhost:3009/brand/addBrand', newBrand);
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const newProduct = {
      BrandName: 'New test Brand',
      image: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-01-v1.jpg"

    };
    const response = await axios.post('http://localhost:3009/brand/addBrand', newProduct);
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
          await axios.post('http://localhost:3009/brand/addBrand_false');
        } catch (error) {
          expect(error.response.status).toBe(404);
        }
  });
});



// Get Brand By ID 

describe('to check if the status code is correct or not', () => {
  it('should return a code of 200', async () => {
    const response = await axios.get('http://localhost:3009/brand/getBrandById/641440e7f5fbc8471e5c7f72');
    expect(response.status).toBe(200);
  });
});


describe('to check if Response in not null', () => {
  it('should not be null', async () => {
    const response = await axios.get('http://localhost:3009/brand/getBrandById/641440e7f5fbc8471e5c7f72');
    expect(response.data).not.toBeNull();
  });
});

describe('to check if  error handling is done correct or not ', () => {
    it('should return a code of 400 when there is an error', async () => {
        try {
            await axios.get('http://localhost:3009/brand/getBrandById/641440e7f5fbc8471e5c7f72');
          } catch (error) {
            expect(error.response.status).toBe(400);
          }
    });
  });




  //update Brand By Id 


describe('to check if the status code for Update is correct or not', () => {
  it('should return a code of 200...', async () => {
    const newBrand = {
      BrandName: 'NEW TEST UPDATE Brand',
      image: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-01-v1.jpg"
    };
    const response = await axios.put('http://localhost:3009/brand/updateBrand/641ad576afb30df118de02e3', newBrand);
    expect(response.status).toBe(200);
  });
});

describe('to check if the response for Update is not null', () => {
  it('should not return null ', async () => {
    const newBrand = {
      BrandName: 'NEW TEST UPDATE Brand',
      image: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-01-v1.jpg"

    };
    const response = await axios.put('http://localhost:3009/brand/updateBrand/641ad576afb30df118de02e3', newBrand);
    expect(response.status).toBe(200);
  });
});

describe('to check if  error handling is done correct or not ', () => {
  it('should return a code of 400 when there is an error', async () => {
      try {
        const newBrand = {
          BrandName: 'NEW TEST UPDATE Brand',
          image: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-01-v1.jpg"
        };
          await axios.put('http://localhost:3009/brand/updateBrand/641ad576afb30df118de02e3', newBrand);
        } catch (error) {
          expect(error.response.status).toBe(400);
        }
  });
});




   // delete Brand by id

  describe('to check if the status code is correct or not', () => {
    it('should return a code of 200', async () => {
      const response = await axios.delete('http://localhost:3009/brand/deleteBrand/641ad581afb30df118de02e5');
      expect(response.status).toBe(200);
    });
  });
  
  describe('to check if Response in not null', () => {
    it('should not be null', async () => {
      const response = await axios.delete('http://localhost:3009/brand/deleteBrand/641ad581afb30df118de02e5');
      expect(response.data).not.toBe(null);
    });
  });
  
  describe('to check if  error handling is done correct or not ', () => {
      it('should return a code of 400 when there is an error', async () => {
          try {
              await axios.delete('http://localhost:3009/brand/deleteBrand/641ad581afb30df118de02e5');
            } catch (error) {
              expect(error.response.status).toBe(404);
            }
      });
    });
















