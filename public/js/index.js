// ----------------Get User Input -----------------------
let formValue = '';
const form = document.getElementById('form-input-field');
const button = document.getElementById('submit');
const serverMessage = document.getElementById('server-message');
const userPost = 'http://localhost:3000/postData';

// ------------------ Post Request to Node ---------------

button.addEventListener('click', function() {
  answer = formValue = form.value;
  console.log(form.value);

  // Note - this code is taken directly from the Mozilla documentation
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    return await response.json();
  }

  postData(userPost, { answer: formValue })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
      serverMessage.innerText = data.irony;
    })
    .catch(err => {
      console.log(err);
    });
});

// ---------------- GET Request from Node ----------------

async function updateServerMessage() {
  await fetch('http://localhost:3000/response')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      serverMessage.innerText = data.activity;
      console.log(serverMessage.innerText);
    })
    .catch(error => {
      console.log(error);
    });
}
// updateServerMessage();
