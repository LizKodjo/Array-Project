const nextImgBtn = document.querySelector('.nextbtn');
const currentDisplayedImg = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
const inputEmail = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const selectedImgsDisplayed = document.querySelector('.showImages');
const selectImgBtn = document.querySelector('.selectbtn');
const savedEmail = document.querySelector('.emailsaved');
const addedEmails = document.querySelector('#addedEmails');
const newDisplay = document.querySelector('selected-images');
let imgURL = 'https://picsum.photos/300?random=2.jpg';
let currentImg;
const mainPage = document.querySelector('.inner');



// Arrays

// Email array to store emails
var emailArray = [];
// Images array to store selected images
let displayArray = [];

// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Get the first image's url
getNextImg();

async function getNextImg() {
    try {
        await fetch(imgURL)
            .then(res => currentDisplayedImg.src = res.url)
            .then(data => {
                currentImg = data;
            })
        // Checking connectivity        
        //console.log('Internet is working');
    } catch (error) {
        console.log('Internet is down, ' + error);
    }
}
// Get next image
nextImgBtn.addEventListener('click', getNextImg);

function convertURL(arr) {
    let imgsToSave = "";

    for (let i = 0; i < arr.length; i++) {
        imgsToSave += ` 
        <img src="${arr[i]}" width="120" height="120">
        `;
    }
    //mainPage.insertAdjacentHTML("beforeend", imgsToSave)
    return imgsToSave;
}

// validate email
function checkEmail() {
    let messages = [];
    //emailIndex = emailArray.indexOf(inputEmail.value);

    // Check blank email field
    if (!inputEmail.value) {
        messages.push('Please enter your email address.');
        // Check email validity 
    } else if (!inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        messages.push('Please enter a valid email address');
        // Check email duplication
    } else if (emailArray.includes(inputEmail.value)) {
        messages.push('Please enter a different email address');
    }

    else {

        emailArray.push(inputEmail.value);
        console.log(emailArray);
        displayArray.push([currentImg]);
    }
    errorMsg.innerText = messages.join(', ');
}
subBtn.addEventListener('click', checkEmail);

