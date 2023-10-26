const nextImg = document.querySelector('.nextbtn');
const imgBox = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const displayImages = document.querySelector('.showImages');
const selectImg = document.querySelector('.selectbtn');
let imgURL = 'https://picsum.photos/300?random=1.jpg';
let displaySelected;

// Arrays

// Images url array
let imgArray = [];


// Email array
var emailArray = [];

// Images array
displayArray = [];



// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Getting URL for images and saving them in an array

function getNextImg() {


    fetch(imgURL)
        .then(res => imgBox.src = res.url)
        .then(data => {
            imgArray.push(data);
            console.log(imgArray);
        });
}
// Get next image
nextImg.addEventListener('click', getNextImg);

// Validate email and display

function CheckEmail() {
    let messages = [];

    // Check blank email field
    if (!email.value) {
        messages.push('Please enter your email address.');
        // Check email validity 
    } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        messages.push('Please enter a valid email address');
        // Check email duplication
    } else if (emailArray.includes(email.value)) {
        messages.push('Please enter a different email address');
        // Display email and save in array
    } else {
        emailArray.push(email.value);
        console.log(emailArray)
        displayImages.innerHTML = email.value;
        emailForm.reset();
    }
    errorMsg.innerText = messages.join(', ');
}

subBtn.addEventListener('click', CheckEmail);

// Check email has been stored for images
function EmailForImages() {
    let imgerrors = [];

    // If email array is empty, display an error message
    if (emailArray == '') {
        imgerrors.push('Please enter an email address for pictures.');
    } else {
        // displaying last img in array
        displaySelected = imgArray[imgArray.length - 1];
        displayArray.push(`<img src = '${displaySelected}' width="120" height="120">`);
        
        displayImages.innerHTML = displayArray;
    }
    errorMsg.innerText = imgerrors.join(', ');
}

selectImg.addEventListener('click', EmailForImages);

