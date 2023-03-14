let name = localStorage.getItem('Name');
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');
let dob = localStorage.getItem('dob');
let acceptedTerms = localStorage.getItem('acceptedTerms');
document.getElementById('name').value = name;
document.getElementById('email').value = email;
document.getElementById('password').value = password;
document.getElementById('dob').value = dob;
document.getElementById('acceptedTerms').checked = acceptedTerms;
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('password', document.getElementById('password').value);
  localStorage.setItem('dob', document.getElementById('dob').value);
  localStorage.setItem('acceptedTerms', document.getElementById('acceptedTerms').checked);
});
let dobInput = document.getElementById('dob');
dobInput.addEventListener('input', function() {
  let dobValue = new Date(dobInput.value);
  let today = new Date();
  let age = today.getFullYear() - dobValue.getFullYear();
  dobValue.setFullYear(today.getFullYear());
  if (today < dobValue) {
    age--;
  }
  if (age < 18 || age > 55) {
    dobInput.setCustomValidity("Date of birth must be between 18 and 55 years ago.");
  } else {
    dobInput.setCustomValidity("");
  }
});