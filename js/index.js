let formValue = '';
const form = document.getElementById('form-input-field');
const button = document.getElementById('submit');

button.addEventListener('click', function() {
  formValue = form.value;
  console.log(form.value);
});
