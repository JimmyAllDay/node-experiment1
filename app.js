// ----------------- Project Set Up ------------------------
// Endpoint
let appData = [];
// add express
const express = require('express');
// add path
const path = require('path');
// add cors
const cors = require('cors');
// import node-fetch
const fetch = require('node-fetch');
// import body-parser
const bodyparser = require('body-parser');
// create a new instance of express
const app = express();
// set port
const port = 3000;
// import logger
const logger = require('./public/middleware/logger');
// import GET response module
// const response = require('./public/js/response.js');

// -------------------- API Variables ---------------------
// Base URL
const apiBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
// API Key
const apiKey = '4642a132e4fdbcbc35d525e854c0c51c';

// ----------------- Initialise Middleware ------------------
// init cors
app.use(cors());

// init body parser
app.use(bodyparser.json());

// init logger middleware
// app.use(logger);

// Set static folder for serving html
app.use(express.static(path.join(__dirname, 'public')));

// -------------------Server Operations ---------------------

// callback to show server is listening
app.listen(port, () => {
  console.log(`app is listenting on port ${port}`);
});

// POST Route to collect user input
app.post('/postData', (req, res) => {
  // Send input to project endpoint array
  data = req.body;
  appData.push(data);
  // API URL
  let apiURL = `${apiBaseUrl}?key=${apiKey}&txt=${appData[0].answer}&lang=auto`;
  async function getsentiment() {
    await fetch(apiURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        res.send(data);
      });
  }
  getsentiment();
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
    return res.send(responseData);
  }
  response();
});
