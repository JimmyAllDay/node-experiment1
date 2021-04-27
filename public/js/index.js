// ----------------Get User Input -----------------------
let formValue = '';
const form = document.getElementById('form-input-field');
const button = document.getElementById('submit');
const serverMessage = document.getElementById('server-message');

// ---------------- GET Request from Node ----------------

async function updateServerMessage() {
  await fetch('http://localhost:3000/response')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(serverMessage.innerText);
      serverMessage.innerText = data.activity;
    })
    .catch(error => {
      console.log(error);
    });
}
updateServerMessage();

button.addEventListener('click', function() {
  formValue = form.value;
  console.log(form.value);
});
