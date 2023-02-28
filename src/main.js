function validForm()
{
var email=document.getElementById('Email').Value;
var password =document.getElementById('password').Value;
if (email==="user"&&password ==="admin") {
    alert('Correct password!');
  } else {
    alert('Incorrect password.');
  }
}
  
    


// Assume you have an input field for the password and a submit button
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submit');

// Define the correct password
const correctPassword = 'myPassword123';

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // Get the user's inputted password
  const userPassword = passwordInput.value;

  // Check if the user's password matches the correct password
  if (userPassword === correctPassword) {
    alert('Correct password!');
  } else {
    alert('Incorrect password. Please try again.');
  }
});



