const useremail = document.querySelector('#email');
const form = document.querySelector('#email-form');
const warnMsg =  document.querySelector('.errorMsg');

// /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

// /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener("submit", (e) => {
    const errors = [];    
    

    if(useremail.value.trim() === '') {
        errors.push('Please enter your email');
    }

    if (errors.length > 0) {
        e.preventDefault();
        warnMsg.toggleAttribute('hidden');
        warnMsg.innerHTML = errors.join(', ');
    }
})

function validateEmail() {

    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!useremail.value.match(emailRegex)) {
        warnMsg.toggleAttribute('hidden');
        warnMsg.innerHTML = 'Please enter a valid email';
        return false;
    }
    warnMsg.innerHTML = '';
    return true;
}
  

