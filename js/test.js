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
let imgURL = 'https://picsum.photos/300?random=2.jpg';
let currentImg;

const main = document.createElement('div');
document.body.append(main);

// Arrays

// Email array to store emails
var emailArray = [];
// Images array to store selected images
let displayArray = [];
// New email
let newEmailArray = [];
let emailAddress = {};
const testArray = [];

// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Get the first image's url
getNextImg();

function getNextImg() {

    fetch(imgURL)
        .then(res => currentDisplayedImg.src = res.url)
        .then(data => {
            currentImg = data;
            // console.log(currentImg);
        });
}

// Get next image
nextImgBtn.addEventListener('click', getNextImg);

// validate email

function checkEmail() {
    let messages = [];

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
    // Display email and save in array
    else {
        emailArray.push(inputEmail.value);
        //console.log(emailArray)
        savedEmail.innerHTML = inputEmail.value;
        emailForm.reset();
    }
    errorMsg.innerText = messages.join(', ');
}

subBtn.addEventListener('click', checkEmail);

// Creating object with array 

function creatEmailObj() {
    let errors = [];
    //emailAddress = inputEmail.value;

    emailAddress = {
        //email_id: [emailArray[emailArray.length - 1]],
        email_id: [emailArray],
        images: [displayArray]
  
    };

    newEmailArray.push(emailAddress);
    //console.log(newEmailArray);

    form.reset();
}

selectImgBtn.addEventListener('click', creatEmailObj)

function newEmailImage() {

    const arsArr = Array.from(newEmailArray);
    console.log(arsArr)
    // for (let i = 0; i < newEmailArray.length; i++) {
       
    //         console.log(newEmailArray[i]);
    //         const ele = document.createElement('div');
    //         ele.textContent = newEmailArray[i];
    //         main.append(ele);
        
        
    // }
    // for (let prop in emailAddress) {
    //     if (savedEmail !== Object.values(emailAddress[prop])) {
    //         savedEmail.innerHTML = inputEmail.value;
    //         //Object.create(emailAddress);
    //         document.querySelector('#demo').innerHTML = Object.values(emailAddress);
            
    //         convertURL();
    //     }

    //     console.log(Object.values(emailAddress));
    //     console.log(`${prop}: ${emailAddress[prop]}`);
    // }
}
selectImgBtn.addEventListener('click', newEmailImage)


// Convert url to img src
function convertURL() {

    for (let i = 0; i < displayArray.length; i++) {
        let imageElement = `<img src = '${displayArray[i]}' width="120" height="120">`;
        selectedImgsDisplayed.innerHTML += imageElement;
    }

}

// Check email has been stored for images, then add images
function emailForImages() {
    let imgerrors = [];

    // If email array is empty, display an error message
    if (emailArray == '') {
        imgerrors.push('Please enter an email address for pictures.');
    } else {
        // Check array for duplicates.
        if (displayArray.includes(currentImg)) {
            imgerrors.push('Please select a different picture')
        } else {
            // Convert URLs to img src
            displayArray.push(currentImg);
            selectedImgsDisplayed.innerHTML = "";

            convertURL();

        }
    }
    errorMsg.innerText = imgerrors.join(', ');
}
selectImgBtn.addEventListener('click', emailForImages);








