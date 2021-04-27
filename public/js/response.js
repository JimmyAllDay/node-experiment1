const fetch = require('node-fetch');

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

module.exports = response;
