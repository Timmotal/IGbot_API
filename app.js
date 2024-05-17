const express = require('express')
const app = express();

const fileUpload = require('express-fileupload')

// express does not parse the request be default
app.use(express.json());// middleware,allows for parsing json to the appropriate data types
app.use(fileUpload());

const PORT = 8080

app.post("/upload", (request, response) => {
    console.log(request.body, ' is the request')
    console.log(request.files, ' req body')
    console.log(request.files.image, 'req file is the mage')
    console.log(request.body.image, 'req body image')
    // return response.send(200);
    return response.json(request.files.image);
});

app.post('/echo', (req, res) => {
    const requestBody = req.body.message + ' this is the request body from the frontend';
   
  
    // Send the request body back as the response
    return res.json(req.body);
  });
  


app.listen(PORT, () => {
    console.log('this Server is listening at port 8080 On May 16th, 1522 hours, 2024')
})
