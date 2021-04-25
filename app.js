const express = require('express');
const app = express();
const port = 3000;
const response = "here's some stuff";

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/response', (req, res) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`app is listenting on port ${port}`);
});
