const nextImg = document.querySelector('.nextbtn');
const imgBox = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const displayImages = document.querySelector('.showImages');
const selectImg = document.querySelector('.selectbtn');
let imgURL = 'https://picsum.photos/300?random=1';

// Arrays

// Images url array
let imgElement= [];

// Email array
var imgEmail = [];

// const emailReg = '/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/';

// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Getting images 

function getNextImg() {
    fetch(imgURL)
        .then(res => imgBox.src = res.url)
        .then(data => {
            imgElement.push(data);
            console.log(imgElement);
        })
}









// Get next image

nextImg.addEventListener('click', getNextImg);

// Validate email and display

function CheckEmail() {
    let messages = [];

    if (!email.value) {
        messages.push('Please enter your email address.');
    } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        messages.push('Please enter a valid address');
    } else {
        imgEmail.push(email.value);
        console.log(imgEmail)
        displayImages.innerHTML = email.value;
        emailForm.reset();
    }
    errorMsg.innerText = messages.join(', ');

}

subBtn.addEventListener('click', CheckEmail);

// Check email duplication

function emailDuplication() {
    if (displayImages.value === email.value) {
        errorMsg.innerHTML = 'Please enter a different email address.';
    }
}

subBtn.addEventListener('click', emailDuplication);

// Check email has been stored
selectImg.addEventListener('click', () => {
    if (!displayImages) {
        errorMsg.textContent = 'Please enter an email address to select picture.';
    }
})