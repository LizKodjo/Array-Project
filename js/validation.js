function changeImage() {
    var img = document.getElementById('current-pic');
    img.src = 'https://picsum.photos/300.jpg?random=1';
}


// $('#next-btn').click(function () {
//     location.reload();
// })

const useremail = document.querySelector('#email');
const form = document.querySelector('#email-form');
const warnMsg =  document.querySelector('.errorMsg');
let confirmEmail = document.querySelector('.recEmail');


  

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values
    const useremailValue = useremail.value.trim();

    if(!useremailValue) {
        setErrorFor(useremail, 'Please enter an email address');
    } else if(!isEmail(useremailValue)) {
        setErrorFor(useremail, 'Email address is not valid');
    } else {
        // setSuccessFor(useremail);

        // Show the validated email
        confirmEmail.textContent = useremail.value;        
    }
}

// Form control
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.errorMsg');
    
    // add error message in the small tags
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(useremail) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(useremail);
}