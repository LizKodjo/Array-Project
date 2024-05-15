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

const mainPage = document.querySelector('.inner');

// variables

let imgURL = 'https://picsum.photos/300?random=2.jpg';
let currentImg;



// Arrays

// Email array to store emails
//var emailArray = [];
// Images array to store selected images
//let displayArray = [];
var profiles =[];

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

    return imgsToSave;
}

// ADD EMAIL BUTTON

// Validate email 

let newEmaiObj;

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

    else {

        //emailArray.push(inputEmail.value);
        profiles.push({email: inputEmail.value, images:[]});
        console.log(profiles);

        // display validated email
        let imgHeading = "";


        //for (let i = 0; i < emailArray.length; i++) {
            for(profile of profiles){

            //for (let i = 0; i < emailArray.length; i++) {
            // testObjects = {
            //     emails: emailArray[i],
            //     images: newImgArray.push(currentImg),
                
            }
            // console.log(testObjects)

            imgHeading =
                `
                <div class = "selected-images">
            <h3 class = "emailsaved"> ${profile.email}</h3>
            
            </div>`;
            // console.log(newEmaiObj);
        //}

        mainPage.insertAdjacentHTML("beforeend", imgHeading);

        //displayArray.push([currentImg]);
        //console.log(displayArray);
    }
    errorMsg.innerText = messages.join(', ');
}
subBtn.addEventListener('click', checkEmail);

// SELECT PICTURE BUTTON
// Check email for images

function emailForImages() {
    let imgerrors = [];

    // Error to display if email array is empty
    // if (emailArray == '') {
    //     imgerrors.push('Please enter an email address for your pictures');
    // }
    email = inputEmail.value;
    profile = profiles.find(item => item.email === email);
    if(!profile) {
        imgerrors.push('Please enter an email address for your pictures');
    }

     if (profile.images.includes(currentImg)) {
        // Checking for duplicates
        imgerrors.push('Please select a different picture.');
    }
    else {
        // Convert URLs to img src

        profile.images.push(currentImg);

        viewImages(profile.images)
        //console.log(profiles)
        //getEachImage;
    }
    errorMsg.innerHTML = imgerrors.join(', ');
}
selectImgBtn.addEventListener('click', emailForImages);

function viewImages(arr) {
    let imgToList = "";

    imgToList += `
            <div class = "selected-images"> 
                      
            <div class="showImages" id="showImages">${convertURL(arr)}</div>
            </div>`;


    mainPage.insertAdjacentHTML("beforeend", imgToList);
}


