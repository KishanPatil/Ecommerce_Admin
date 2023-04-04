/**
 * @author Kishan Patil
 * @author Rajeshwari Kulkarni
 * @author Meghana Chavanke
 * @author Pradeep Prajapati 
 */
// const {emailjs} = require('emailjs').default;
// import emailjs from 'emailjs'
const { customermodel } = require("../../models/Customer/customerSchema"); // Importing the customer model
const { customerAddressmodel } = require("../../models/Customer/customerAddressSchema")//importing the customer address mode
const { connectionDb, closeDb } = require("../../database/connection"); // Importing the database connection functions
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');

/**
 * @description get all customers
 * @returns {Promise<Array>} Returns an array of all customers
 */
const getAllCustomers = async () => {
  try {
    await connectionDb(); // Connecting to the database
    const result = await customermodel.find() // Finding all customers
    await closeDb(); // Closing the database connection
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * @description get a customer by ID
 * @param {string} id - The ID of the customer to retrieve
 * @returns {Promise<Object>} Returns the customer object if found, otherwise null
 */
const getCustomerById = async (id) => {
  try {
    await connectionDb(); // Connecting to the database
    const result = await customermodel.findById(id); // Finding the customer by ID
    await closeDb(); // Closing the database connection
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * @description add a new customer
 * @param {string} fname - The first name of the customer
 * @param {string} lname - The last name of the customer
 * @param {string} phone - The phone number of the customer
 * @param {string} email - The email address of the customer
 * @param {string} password - The password of the customer
 * @param {string} city - The city of the customer
 * @param {string} state - The state of the customer
 * @param {string} pincode - The pincode of the customer
 * @returns {Promise<Object>} Returns the new customer object
 */
const addCustomer = async (fname, lname, phone, email, password, city, state, pincode) => {
  try {
    await connectionDb(); // Connecting to the database
    const result = await customermodel.create({
      fname,
      lname,
      phone,
      email,
      password,
      city,
      state,
      pincode,
    }); // Creating a new customer in the database
    await closeDb(); // Closing the database connection
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * @description update a customer
 * @param {string} id - The ID of the customer to update
 * @param {string} fname - The updated first name of the customer
 * @param {string} lname - The updated last name of the customer
 * @param {string} phone - The updated phone number of the customer
 * @param {string} email - The updated email address of the customer
 * @param {string} password - The updated password of the customer
 * @param {string} city - The city of the customer
 * @param {string} state - The state of the customer
 * @param {string} pincode - The pincode of the customer
 * @returns {Promise<Object>} Returns the updated customer object
 */
const updateCustomerById = async (
  id,
  fname,
  lname,
  phone,
  email,
  password,
  city,
  state,
  pincode
) => {
  try {
    await connectionDb(); // Connecting to the database
    const result = await customermodel.findByIdAndUpdate(
      id,
      { fname, lname, phone, email, password, city, state, pincode },
      { new: true }
    ); // Updating the customer with the provided details
    await closeDb(); // Closing the database connection
    return result;
  } catch (e) {
    throw new Error(e);
  }
};


/**
 * @description delete a customer by ID
 * @param {string} id - The ID of the customer to delete
 * @returns {Promise<Object>} Returns the deleted customer object
 */
const deleteCustomerById = async (id) => {
  try {
    console.log(id);
    // establish database connection
    await connectionDb()
    // delete customer by id
    const result = await customermodel.findByIdAndDelete(id);
    // close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

const deleteAllCustomers = async () => {
  try {
    // establish database connection
    await connectionDb()
    //   delete all customers
    const result = await customermodel.deleteMany();
    // close database connection
    await closeDb()
    return result
  }
  catch (e) {
    throw new Error(e)
  }
}

const getCustomerByEmail = async (email, password) => {
  try {
    await connectionDb();
    const result = await customermodel.findOne({ email , password })
    if(result === null){
      return  {isValid : false , error : 'Invalid Email or Password'}
    }
    // close database connection
    await closeDb()

    let otp = Math.floor(Math.random() * 10000)

    otp = otp < 1000 ? otp + 1000 : otp

    return {isValid : true , otp : otp , data : result}
  }
  catch (e) {
    return {isValid : false , error : e.message || e}
  }
}
//exporting functions
module.exports = {
  getAllCustomers,
  getCustomerById,
  getCustomerByEmail,
  addCustomer,
  updateCustomerById,
  deleteCustomerById,
  deleteAllCustomers
}
