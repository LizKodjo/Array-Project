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

    let emailAddress = {
        email_id: inputEmail.value,
        images: [
            currentImg
        ]
    }
    emailArray.push(emailAddress);
    console.log(emailArray);
    form.reset();

    // Save to local storage

    localStorage.setItem('emailList', JSON.stringify(emailArray));


    // const emailObj = new FormData(emailForm);
    // const createdObj = Object.fromEntries(emailObj);
    // console.log(createdObj);

    // const convertedToJson = JSON.stringify(createdObj);
    // localStorage.setItem('form', convertedToJson);

    // // for(item of emailObj) {
    // //     console.log(item);
    // // }
    // console.log(emailObj);
    //form.reset()

});

// const convertedToJson = localStorage.getItem('form');
// const createdObj = JSON.parse(convertedToJson);

// for (key in createdObj) {
//     const markup = `
//     <div>
//     <span>${createdObj[key]}</span>
//     </div>`;
//     savedEmail.innerHTML += markup;
// }

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

// function setEmailArray() {
//     const emailRec = {};
//     if (savedEmail) {
//         emailRec.value = savedEmail.value;
//         console.log(emailRec);
//     }

  
// }



//     subBtn.addEventListener('click', setEmailArray)