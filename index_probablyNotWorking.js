// const express = require('express');
// const multer = require('multer'); // For multipart/form-data handling

// const app = express();
// // const upload = multer({ dest: 'uploads/' }); // Optional: Configure upload directory
 
// app.post('/upload', upload.single('image'), async (req, res) => {

     
//   try {
//     // Ensure 'Accounts' and 'file' are properly defined outside the function
//     const uploadedStories = await Promise.all(Accounts.map(async (account) => {
//         const image = req.file; // Access uploaded image data
//       const readFileAsync = promisify(readFile);
//       const path = './sphinx.jpg';
//       const file = await readFileAsync(path);
//       const ig = new IgApiClient();
//       console.log(account.id); // Assuming 'id' is a property in each account object

//       // Login function (replace placeholders with actual implementation)
//       async function login() {
//         ig.state.generateDevice(account.IG_USERNAME);
//         console.log('username',account.IG_USERNAME, account.IG_PASSWORD, 'password');
//         await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//       }

//       // Upload function (replace placeholders with actual implementation)
//       async function uploadNow() {
//         await login();
//         console.log('Uploading story for', account.IG_USERNAME);
//         console.log('Password before encryption:', account.IG_USERNAME)
//         await ig.publish.story({
//           file,
//         });
       
//       }

//       await uploadNow(account); // Call login and upload for each account
      
//     }));
//     console.log('Story uploads completed!');
//   } catch (error) {
//     console.error('Error during story upload:', error);
//   }
// //   try {
// //     const image = req.file; // Access uploaded image data

// //     // Implement logic to handle image processing or validation (if needed)

// //     // You cannot directly upload to Instagram Stories from your server due to Instagram's API limitations.
// //     // Consider alternative approaches (explained below).

// //     res.json({ message: 'Image uploaded successfully' }); // Or appropriate response
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Image upload failed' });
// //   }
// });

// app.listen(3000, () => console.log('Server listening on port 3000'));

// ------------------------------------

// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: false}))

// app.use(express.json({ limit: '50mb' }));

// // POST route to receive image
// app.post('/upload', async (req, res) => {
//   // Assuming the image data is sent in the request body as a base64-encoded string
//   // const imageData = req.body.image
//   // console.log(imageData)
//   const text = req.body

//   try {
//     console.log('about to map the account', text)
//   //   const uploadedStories = await Promise.all(Accounts.map(async (account) => {
//   //     const imageData = req.body.image
//   // console.log(imageData, 'image data');

//   //     const path = req.file; // Access uploaded image data
//   //     console.log(path)
//   //   const readFileAsync = promisify(readFile);
//   //   // const path = './sphinx.jpg';
//   //   const file = await readFileAsync(path);
//   //   const ig = new IgApiClient();
//   //   console.log(account.id); // Assuming 'id' is a property in each account object

//   //   // Login function (replace placeholders with actual implementation)
//   //   async function login() {
//   //     ig.state.generateDevice(account.IG_USERNAME);
//   //     console.log('username',account.IG_USERNAME, account.IG_PASSWORD, 'password');
//   //     await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//   //   }

//   //   // Upload function (replace placeholders with actual implementation)
//   //   async function uploadNow() {
//   //     await login();
//   //     console.log('Uploading story for', account.IG_USERNAME);
//   //     console.log('Password before encryption:', account.IG_USERNAME)
//   //     await ig.publish.story({
//   //       file,
//   //     });
     
//   //   }

//   //   await uploadNow(account); // Call login and upload for each account
    
//   // }));
//   console.log('Story uploads completed!');
//     // Trigger backend function to upload image to Instagram API
//     // await uploadToInstagram(imageData);

//     res.send('Image uploaded to Instagram successfully.');
//   } catch (error) {
//     console.error('Error uploading image to Instagram:', error);
//     res.status(500).send('Error uploading image to Instagram.');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
// --------------------------------------

// const express = require('express');
// // const multer = require('multer'); // for handling file uploads

// const app = express();
// const port = 3000;

// // Configure Multer for file upload (adjust storage options as needed)
// // const upload = multer({ dest: 'uploads/' }); // Stores uploaded files in the 'uploads' folder

// // Handle POST request to /upload endpoint
// app.post('/upload', (req, res) => {
//   if (req.body) {
//     console.log('body received succesfully:', req.body);
//     // You can access the uploaded file details here, such as filename, size, etc.
//     // You can also perform further actions like saving the file to a database or processing it.
//     res.json({ message: 'File uploaded successfully!' });
//   } else {
//     console.error('Error uploading file!');
//     res.status(400).json({ message: 'Error uploading file!' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// -----------------------------------

const express = require('express');
const fileUpload = require('express-fileupload')
const app = express();

const port = 8080;

app.use(express.json());
app.use(fileUpload());

// POST route to receive string payload
app.post('/upload', (req, res) => {
  const payload = req.body; // Assuming the payload is sent as a plain text string
  
  console.log('Received payload:', payload);

  // Your logic here to handle the payload

  res.send('Payload received.');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


