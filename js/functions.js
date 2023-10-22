const nextImg = document.querySelector('.nextbtn');
const imgBox = document.querySelector('.random-img');
const emailForm = document.querySelector('#form');
let email = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const subBtn = document.querySelector('.submitbtn');
const getImages = document.querySelector('showImages');


// Prevent submit button from reloading page
emailForm.addEventListener('submit', (e) => {
    let messages = [];

    if (!email.value) {
        messages.push('Please enter your email address.');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorMsg.innerText = messages.join(', ');
    }
    
})

// Get next image

nextImg.addEventListener('click', () => {
   imgBox.src = "https://picsum.photos/300?random=1";
})

// Get email and display

$('.submitbtn').click(function(){
    $('.email').append($('.showImages').text());
});