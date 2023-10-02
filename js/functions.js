
let nextPic = document.querySelector('#next-btn');
let currPic = document.querySelector('#current-pic');
let selectPic = document.querySelector('#select-btn');

// $('#next-btn').click(function () {
//     $('#current-pic').val(currPicUrl);
// })

$('#next-btn').click(function () {
    currPic.src = 'https://picsum.photos/300.jpg';
});

let selectedImages = [];

selectPic.addEventListener('click', getNextPic)
function getNextPic() {

    // fetch(currPic)
    // .then(function(response) {
    //     return response.blob();
    // })
    // .then(function(data) {
    //     display_image(data);
    // })

    fetch('currPic')
    .then(res => res.blob())
    .then(blob => {
        newImage = new Image([blob], 'image', {type: blob.Image})
        
    });
    
}




// fetch('currPic')
// .then(res => res.json())
// .then(data => console.log(data))

// document.querySelector('#select-btn').addEventListener('change', function () {
//     const newImage = document.createElement('current-pic');
//     newImage.src = 'new-image.jpg';
//     newImage.alt = 'New Image';
// })

// async function fetchImg() {
//     return await fetch('currPic').then((res) => {
//         return res.blob()
//     }).then((blob) => {
//         let blobUrl = URL.createObjectURL(blob);
//         document.querySelector('.getImg').src = blobUrl;
//         console.log(blobUrl);
//     })
// }

// let blobUrl = null;
// function btnClick() {
//     blobUrl = fetchImg();
// }
// document.querySelector('#select-btn').addEventListener('click', btnClick)