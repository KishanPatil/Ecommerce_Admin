/**
 * @author Kishan Patil
 */
const { customermodel } = require("../../models/Customer/customerSchema"); // Importing the customer model
const {customerAddressmodel} = require("../../models/Customer/customerAddressSchema")//importing the customer address mode
const { connectionDb, closeDb } = require("../../database/connection"); // Importing the database connection functions
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
/**
 * @description get all customers
 * @returns {Promise<Array>} Returns an array of all customers
 */
const getAllCustomer = async () => {
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
 * @param {string} address - The address of the customer
 * @returns {Promise<Object>} Returns the new customer object
 */
const addCustomer = async (fname, lname, phone, email, password, city,state,pincode) => {
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
 * @param {string} address - The updated address of the customer
 * @returns {Promise<Object>} Returns the updated customer object
 */
const updateCustomer = async (
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
      { fname, lname, phone, email, password, city ,state, pincode },
      { new: true }
    ); // Updating the customer with the provided details
    await closeDb(); // Closing the database connection
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

// const updateCustomer = async (
//   id,
//   fname,
//   lname,
//   phone,
//   email,
//   password,
//   city,
//   state,
//   pincode
// ) => {
//   try {
//     await connectionDb(); // Connecting to the database
//     const result = await customermodel.findByIdAndUpdate(
//       id,
//       { fname, lname, phone, email, password, address: { city, state, pincode } },
//       { new: true }
//     ); // Updating the customer with the provided details
//     await closeDb(); // Closing the database connection
//     return result;
//   } catch (e) {
//     throw new Error(e);
//   }
// };


/**
 * @description delete a customer by ID
 * @param {string} id - The ID of the customer to delete
 * @returns {Promise<Object>} Returns the deleted customer object
 */
const deleteCustomerById= async (id) => {
  try{
      console.log(id);
      // establish database connection
        await connectionDb()
        // delete customer by id
        const result = await customermodel.findByIdAndDelete(id);
        // close database connection
        await closeDb()
        return result   
      }
  catch(e){
    throw new Error(e)
  }
}

const deleteAllCustomer= async () => {
  try{
      // establish database connection
        await connectionDb()
      //   delete all customers
        const result = await customermodel.deleteMany();
        // close database connection
        await closeDb()
        return result   
      }
  catch(e){
    throw new Error(e)
  }
}

// const getCustomerByEmail = async (email) => {
//   try {
//     await connectionDb();
//     const result = await customermodel.findOne({ email: email })
//      // close database connection
//      await closeDb()
//     return result
//   }
//   catch (e) { console.log(e) }
// }

// const otpGeneratorfun = async () => {
//   const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
//   // Send OTP to the user's email
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@example.com',
//     pass: 'your-email-password'
//   }
// });
// const mailOptions = {
//   from: 'your-email@example.com',
//   to: 'user-email@example.com',
//   subject: 'Login OTP',
//   text: `Your OTP for login is ${otp}`
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }
const getCustomerByEmail = async (email) => {
  try {
    await connectionDb();
    const result = await customermodel.findOne({ email: email })
     // close database connection
     await closeDb()
    return result
  }
  catch (e) { console.log(e) }
}

const otpGeneratorbyemail = async (email) => {
  const otp = otpGenerator.generate(6, { digits: true, upperCase: false, specialChars: false });
  console.log("otp =", otp);

  // Update OTP and creation time in database
  const otpCreatedAt = new Date();
  await connectionDb();
  await customermodel.updateOne(
    { email: email },
    { otp: otp, otpCreatedAt: otpCreatedAt }
  );

  // Schedule removal of OTP after 5 minutes
  const fiveMinutes = 5 * 60 * 1000;
  setTimeout(async () => {
    await connectionDb();
    await customermodel.updateOne({ email: email }, { $unset: { otp: "", otpCreatedAt: "" } });
    console.log("OTP removed");
  }, fiveMinutes);

  // Send OTP to the user's email
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
      user: 'Kishan.Patil@harbingergroup.com',
      pass: 'H@rb!ng3R@GR'
    }
  });
  const mailOptions = {
    from: 'Kishan.Patil@harbingergroup.com',
    to: email,
    subject: 'Login OTP',
    text: `Your OTP for login is ${otp}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("errr",error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const verifyOtpAndPassword = async (email, otp, password) => {
  try {
    await connectionDb();
    const result = await customermodel.findOne({ email: email, otp: otp, password: password })
    // close database connection
    await closeDb()

    if (result) {
      return { success: true };
    } else {
      return { error: 'Invalid OTP or password' };
    }
  } catch (error) {
    console.log(error);
    
  }
}

//exporting functions
 module.exports =  {
                    getAllCustomer,
                    getCustomerById,
                    getCustomerByEmail,
                    addCustomer,
                    updateCustomer,
                    deleteCustomerById,
                    deleteAllCustomer,
                    otpGeneratorbyemail
                  }
