const { IgApiClient } = require('instagram-private-api');
require("dotenv").config();
const { readFile } = require('fs');
const { promisify } = require('util');
// import multer from 'multer';

const path = require('path')


// const readFileAsync = promisify(readFile);
const Accounts = require('./src/account');
const express = require('express');

const app = express();

const fileUpload = require('express-fileupload')

const port = 8080;

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.use(express.static('./public'));



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg'
//   ) {
//     cb(null, true);
//   } else {
//     cb({ message: 'File format not supported' }, false);
//   }
// };

// const multerUp

// POST route to receive string payload
app.post("/upload", async (req, res) => {
  // const payload = req.files.image.name; // Assuming the payload is sent as a plain text string
  // console.log(req.files.image.name,' is req file name')
  // console.log(payload, ' is the payload')

  
  
  try {
    // Ensure 'Accounts' and 'file' are properly defined outside the function
    const uploadedStories = await Promise.all(Accounts.map(async (account) => {
      let imageFile = req.files.image;

      // Access the temporary file path
      const tempPath = imageFile.tempFilePath + '.jpg';
      console.log('Temporary file path:', tempPath);
      // const payload = req.files.image;

      // const imagePath = path.join(__dirname, '../public/uploads/' + `${payload.name}`);
      // await productImage.mv(imagePath);
      
      // console.log(req.files)
      console.log(tempPath, ' is the payload inside of map function')

      const readFileAsync = promisify(readFile);
      // const path = './earth.jpg';
      
      const file = await readFileAsync(tempPath);
      console.log(file, ' this is the file from the frontend')
      const ig = new IgApiClient();
      console.log(account.id); // Assuming 'id' is a property in each account object

      // Login function (replace placeholders with actual implementation)
      async function login() {
        ig.state.generateDevice(account.IG_USERNAME);
        console.log('username',account.IG_USERNAME, account.IG_PASSWORD, 'password');
        await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
      }

      // Upload function (replace placeholders with actual implementation)
      async function uploadNow() {
        await login();
        console.log('Uploading story for', account.IG_USERNAME);
        console.log('Password before encryption:', account.IG_USERNAME)
        await ig.publish.story({
          file,
        });
       
      }

      await uploadNow(account); // Call login and upload for each account
      
    }));
    console.log('Story uploads completed!');
  } catch (error) {
    console.error('Error during story upload:', error);
    return res.json(error.message)
  }
  
  console.log('Received payload:', payload);

  // Your logic here to handle the payload

  res.send('Payload received.');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


// -----------------

// const path = require('path')
// app.use(express.static('./public'));

// const { StatusCodes } = require('http-status-codes');

// const uploadProductImage = async (req, res) => {
//     let productImage = req.files.image;

//     const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

//     await productImage.mv(imagePath);

//     // res.send('upload product image')
//     return res.status.(StatusCodes.OK).json({image:{ src: `/uploads/${productImage.name}`}})
// }

// module.exports = {
//     uploadProductImage,
// }