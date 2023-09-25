const form = document.getElementById('email-form');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.getElementById('email');
const errorMsg = document.querySelector('.errorMsg');
const emailValue = email.value.trim();

// if (form) {
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//     });
// }

// function isValidEmail() {
//     return emailRegex.test(emailValue);
// }

// if (!emailValue) {
//     console.log('Please enter an email');
// }

// if (!isValidEmail(emailValue)) {
//     console.log('please enter a valid email');
// }

// Validating email

function emailValidation() {
    if (!email) {
        console.log('Please enter an email address');
    }
}
