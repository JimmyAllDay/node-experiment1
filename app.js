// add express
const express = require('express');
// add path
const path = require('path');
// add cors
const cors = require('cors');
// import node-fetch
const fetch = require('node-fetch');
// create a new instance of express
const app = express();
// set port
const port = 3000;
// import logger
const logger = require('./public/middleware/logger');
// import response module
// const response = require('./public/js/response.js');
// API Key

// init cors
app.use(cors());

// init logger middleware
// app.use(logger);

// Set static folder for serving html
app.use(express.static(path.join(__dirname, 'public')));

// callback to show server is listening
app.listen(port, () => {
  console.log(`app is listenting on port ${port}`);
});

// POST Route to handle user input
app.post('/post', (req, res) => {
  let apiString = 'Thanks, ya filthy animal';
  console.log('post data received');
  res.send(apiString);
});

// response to get request on '/response' path
app.get('/response', (req, res) => {
  async function response() {
    let responseData = [];
    await fetch('http://www.boredapi.com/api/activity')
      .then(res => {
        return res.json();
      })
      .then(data => {
        responseData = data;
      });
    console.log(responseData);
    return res.send(responseData);
  }
  response();
});
