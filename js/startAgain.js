// Constants for DOM element

const nextImgBtn = document.querySelector(".nextbtn");
const currentDisplayedImg = document.querySelector(".random-img");
const emailForm = document.querySelector("#form");
const inputEmail = document.querySelector("#email");
const errorMsg = document.querySelector(".errorMsg");
const subBtn = document.querySelector(".submitbtn");
const selectedImgsDisplayed = document.querySelector(".showImages");
const selectImgBtn = document.querySelector(".selectbtn");
const mainPage = document.querySelector(".inner");

let selectedImages = document.querySelector(".selected-images");

let emailHeading = document.querySelector(".emailsaved");
//let showImages = querySelector("div");

// Variables
let imgURL = "https://picsum.photos/300?random=2.jpg";
let currentImg;
let imgHeading = "";
let imgToList = "";

// Arrays
const profiles = [];
//const profile = profiles.find((item) => item.email === email);
profiles.push({ email: inputEmail.value, images: [] });
const emailArray = [];
const displayArray = [];

const email = inputEmail.value;
//const profile = profiles.find((item) => item.email === email);

// Prevent submit button from reloading page
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

async function getNextImg() {
  try {
    const res = await fetch(imgURL);
    currentDisplayedImg.src = res.url;
    currentImg = res.url;
  } catch (error) {
    console.log("Internet is down, " + error);
  }
}

// Function to convert URLs to image elements
function convertURL(arr) {
  return arr
    .map((img) => `<img src="${img}" width="120" height="120">`)
    .join("");
}

// validate email
function checkEmail() {
  const messages = [];

  // Check blank email field
  if (!inputEmail.value) {
    messages.push("Please enter your email address.");
    // Check email validity
  } else if (
    !inputEmail.value.match(/^[A-z\._\0-9][^@]*[@][A-z]*[\.][a-z]{2,4}$/g)
  ) {
    messages.push("Please enter a valid email address");
    // Check email duplication
  } else if (profiles.some((profile) => profile.email === inputEmail.value)) {
    messages.push("Please enter a different email address");
  } else {
    //emailArray.push(inputEmail.value);
    profiles.push({ email: inputEmail.value, images: [] });

    let userHeading = `<h3>${inputEmail.value}</h3>`;
    mainPage.insertAdjacentHTML("beforeend", userHeading);
  }

  errorMsg.innerText = messages.join(", ");
}

//Function to associate email with selected images
function emailForImages() {
  const imgerrors = [];
  const email = inputEmail.value;
  const profile = profiles.find((item) => item.email === email);
  let imageToDisplay = "";

  console.log(profile);
  console.log(typeof profile);
  // console.log(profiles.key());

  // Error to display if email array is empty
  if (!profile) {
    imgerrors.push("Please enter an email address for your pictures");
  } else if (profile.images.includes(currentImg)) {
    // Checking for duplicates
    imgerrors.push("Please select a different picture.");
  } else {
    profile.images.push(currentImg);
    console.log(profile.email);
    console.log(profile.images);
    console.log(profiles);
    console.log(profile.images.valueOf())
    console.log(profile)

    let currentUser = profile.email;

    if (currentUser) {
      imageToDisplay = profile.images[profile.images.length - 1];
      console.log(imageToDisplay);



      imgToList = `<div class="selected-images" id="${currentUser}
    
      <div class="showImages" id="showImages">${convertURL(profile.images
      )}</div>
      </div>`;

      // document.getElementById("showImages").appendChild(convertURL(image))

    mainPage.insertAdjacentHTML("beforeend", imgToList);


      




      
      
      
    
      //selectedImgsDisplayed.append(image);

      
      console.log(currentUser);
    }
   
    
    

    // imgToList = `<div class="selected-images" id="${currentUser}
    
    //   <div class="showImages" id="showImages">${convertURL(profile.images
    //   )}</div>
    //   </div>`;

    //   // document.getElementById("showImages").appendChild(convertURL(image))

    // mainPage.insertAdjacentHTML("beforeend", imgToList);

    
  }
  errorMsg.innerHTML = imgerrors.join(", ");
}




// Display selected images
// function viewImages(arr) {
//   //convertURL(arr);
//   // for (let i = 0; i < arr.length; i++)
//   //     selectedImages.appendChild(arr[i]);

//   imgToList = `
//           <div class = "selected-images">
//           <div class="showImages" id="showImages">${convertURL(arr)}</div>
//           </div>`;

//   selectedImgsDisplayed.append(arr);

//   mainPage.insertAdjacentHTML("beforeend", imgToList);

// }

//selectedImages.append(convertURL(arr));

// Event listeners
nextImgBtn.addEventListener("click", getNextImg);
selectImgBtn.addEventListener("click", emailForImages);
subBtn.addEventListener("click", checkEmail);

// Get the first image's url
getNextImg();
