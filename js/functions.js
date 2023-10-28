const nextImgBtn = document.querySelector('.nextbtn');
const currentDisplayedImg = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
const inputEmail = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const selectedImgsDisplayed = document.querySelector('.showImages');
const selectImgBtn = document.querySelector('.selectbtn');
const savedEmail = document.querySelector('.emailsaved');
let imgURL = 'https://picsum.photos/300?random=1.jpg';
let currentImg;

// Arrays

// Email array to store emails
var emailArray = [];
// Images array to store selected images
let displayArray = [];
// New email
let newEmailArray = [];

// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Getting URL for image

function getNextImg() {

    fetch(imgURL)
        .then(res => currentDisplayedImg.src = res.url)
        .then(data => {
            currentImg = data;
            // console.log(currentImg);
        });
}

// Get the first image's url
getNextImg();
// Get next image
nextImgBtn.addEventListener('click', getNextImg);

// Validate email and display

function CheckEmail() {
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
        // Display email and save in array
    } else {
        emailArray.push(inputEmail.value);
        console.log(emailArray)
        savedEmail.innerHTML = inputEmail.value;
        emailForm.reset();
    }
    errorMsg.innerText = messages.join(', ');
}

subBtn.addEventListener('click', CheckEmail);

// Check email has been stored for images, then add images
function EmailForImages() {
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

            for (let i = 0; i < displayArray.length; i++) {
                let imageElement = `<img src = '${displayArray[i]}' width="120" height="120">`;
                selectedImgsDisplayed.innerHTML += imageElement;
            }

            // console.log(displayArray);
        }
    }
    errorMsg.innerText = imgerrors.join(', ');
}
selectImgBtn.addEventListener('click', EmailForImages);

// Check for duplication




// if (displayArray = '') {
//     displayArray.push(currentImg);
// }

// if (displayArray.includes(currentImg)) {
//     imgerrors.push('Please select a different picture.');
// } else {
//     // displayArray.push(`<img src = '${currentImg}' width="120" height="120">`);

//     selectedImgsDisplayed.innerHTML = displayArray;

//     console.log(displayArray)
// }


// else {
// displayArray.push(currentImg);

// displaying last img in array
// imgArray.push(currentImg);
//     if (imgArray.includes(currentImg)) {
//         imgerrors.push('Please select a different pic');
//     } else {
//         displayArray.push(`<img src = '${currentImg}' width="120" height="120">`);
//         console.log(imgArray);
//     }
//     selectedImgsDisplayed.innerHTML = displayArray;
// }






// selectImgBtn.addEventListener('click', () => {
//     if (selectedImgsDisplayed === chosenPics) {
//         console.log('Please select a different picture');
//     }
// })

// subBtn.addEventListener('click', () => {
//     if (emailArray.includes(inputEmail.value)) {
//         console.log('add different email');
//     } else {
//         emailArray.push(newEmailArray);
//         document.innerHTML = `<div>${savedEmail}</div>`;
//     }
// })