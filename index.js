require("dotenv").config();

const { IgApiClient } = require('instagram-private-api');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const path = require('path');
const { readFile } = require('fs');
const { promisify } = require('util');
const { StatusCodes } = require('http-status-codes');
const fs = require('fs')

const Accounts = require('./src/account');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('./public'));




app.post("/upload", async (req, res) => {
  const story = req.files.image;
  const imagePath = path.join(__dirname, '/public/uploads/' + `${story.name}`);

  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  try {
    const uploadStoryToAccounts = await Promise.all(Accounts.map(async (account) => {
      // const story = req.files.image;

      // const imagePath = path.join(__dirname, '/public/uploads/' + `${story.name}`);
      await story.mv(imagePath);
      

      const readFileAsync = promisify(readFile);
      
      const file = await readFileAsync(imagePath);
      const ig = new IgApiClient();

      async function login() {
        ig.state.generateDevice(account.IG_USERNAME);
        await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
      }

      async function uploadNow() {
        await login();
        await ig.publish.story({ 
          file,
        });
       
      }

      await uploadNow(account);
      
    }));
    console.log('Story uploads completed!');
  } catch (error) {
    console.error('Error during story upload:', error);
    return res.json(error.message)
  }
  

  // fs.unlinkSync(imagePath);
  res
  .status(StatusCodes.OK)
  .json({
    message: 'Story uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});