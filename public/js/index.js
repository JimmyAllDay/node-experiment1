// ----------------Get User Input -----------------------
let formValue = '';
const form = document.getElementById('form-input-field');
const button = document.getElementById('submit');
const serverMessage = document.getElementById('server-message');

// ------------------ Post Request to Node ---------------

button.addEventListener('click', function() {
  formValue = form.value;
  console.log(form.value);
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
updateServerMessage();
