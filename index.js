const { IgApiClient } = require('instagram-private-api');
require("dotenv").config();
const { readFile } = require('fs');
const { promisify } = require('util');

// const readFileAsync = promisify(readFile);
const Accounts = require('./src/account');
const express = require('express');

const app = express();

const fileUpload = require('express-fileupload')

const port = 8080;

// app.use(express.json());
app.use(fileUpload());

// POST route to receive string payload
app.post("/upload", async (req, res) => {
  // const payload = req.files.image.name; // Assuming the payload is sent as a plain text string
  // console.log(req.files.image.name,' is req file name')
  // console.log(payload, ' is the payload')
  
  try {
    // Ensure 'Accounts' and 'file' are properly defined outside the function
    const uploadedStories = await Promise.all(Accounts.map(async (account) => {
      const payload = req.files.image.name;
      // console.log(req.files)
      console.log(payload, ' is the payload inside of map function')

      const readFileAsync = promisify(readFile);
      // const path = './earth.jpg';
      const file = await readFileAsync(payload);
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
