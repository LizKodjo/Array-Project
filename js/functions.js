// Constants for DOM element
const nextImgBtn = document.querySelector('.nextbtn');
const currentDisplayedImg = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
const inputEmail = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const selectedImgsDisplayed = document.querySelector('.showImages');
const selectImgBtn = document.querySelector('.selectbtn');
const mainPage = document.querySelector('.inner');
const imageContainer = document.querySelector('.selected-images');

// Variables
let imgURL = 'https://picsum.photos/300?random=2.jpg';
let currentImg;

// Arrays
const profiles = [];

// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

async function getNextImg() {
    try {
        const res = await fetch(imgURL);
        currentDisplayedImg.src = res.url;
        currentImg = res.url;
    } catch (error) {
        console.log('Internet is down, ' + error);
    }
}

// Function to convert URLs to image elements with delete button
function convertURL(arr) {
    return arr.map((img, index) => `
        <div class="image-wrapper" data-index="${index}" onclick="deleteImage('${img}')">
            <img src="${img}" width="120" height="120">
            <div class="delete-overlay">x</div>
        </div>
    `).join("");
}

// Validate email
function checkEmail() {
    const messages = [];

    // Check blank email field
    if (!inputEmail.value) {
        messages.push('Please enter your email address.');
    } else if (!inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        messages.push('Please enter a valid email address');
    } else if (profiles.some(profile => profile.email === inputEmail.value)) {
        messages.push('Please enter a different email address');
    } else {
        profiles.push({ email: inputEmail.value, images: [] });

        let imgHeading = `
        <div class="selected-images">
        <h3 class="emailsaved"> ${inputEmail.value}</h3>
        <div class="showImages-${extractUsername(inputEmail.value)}" id="showImages"></div>
        </div>`;
        mainPage.insertAdjacentHTML("beforeend", imgHeading);
    }
    errorMsg.innerText = messages.join(', ');
}

function extractUsername(email) {
    if (typeof email !== 'string' || email.indexOf('@') === -1) {
        throw new Error('Invalid email address');
    }

    let username = email.split('@')[0];
    return username;
}

// Function to associate email with selected images
function emailForImages() {
    const imgerrors = [];
    const email = inputEmail.value;
    const profile = profiles.find(item => item.email === email);

    if (!profile) {
        imgerrors.push('Please enter an email address for your pictures');
    } else if (profile.images.includes(currentImg)) {
        imgerrors.push('Please select a different picture.');
    } else {
        profile.images.push(currentImg);
        viewImages(profile.images, extractUsername(email));
    }
    errorMsg.innerHTML = imgerrors.join(', ');
}

// Display selected images
function viewImages(arr, username) {
    const elem = document.querySelector(`.showImages-${username}`);
    elem.innerHTML = `<div class="showImages" id="showImages">${convertURL(arr)}</div>`;
}

// Delete image function
function deleteImage(imgURL) {
    profiles.forEach(profile => {
        const imgIndex = profile.images.indexOf(imgURL);
        if (imgIndex > -1) {
            profile.images.splice(imgIndex, 1);
            viewImages(profile.images, extractUsername(profile.email));
        }
    });
}

// Event listeners
nextImgBtn.addEventListener('click', getNextImg);
selectImgBtn.addEventListener('click', emailForImages);
subBtn.addEventListener('click', checkEmail);

// Get the first image's url
getNextImg();
