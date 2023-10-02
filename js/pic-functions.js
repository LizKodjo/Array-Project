
// const image = document.getElementById('current-pic');
// image.addEventListener('click', function() {
//     image.style.borderColor = 'red';
// });

let arrayOfPics = [];

// $(function () {
//     $('#select-btn').click(function () {
//         var imageUrl = document.getElementsByTagName('img');
//         selectedPic.push(imageUrl);
//         // $('#recEmail').pop(imageUrl);
//         console.log(imageUrl);
//         // $('#recEmail').push(selectedPic);
//     });
// });


// function copyPic() {
//    let presentPic = document.getElementById('#current-pic');
//    document.getElementById('#recEmail')  = presentPic;

// }

// let getPicture = document.getElementById('#select-btn');

// getPicture.addEventListener("copy", copyPic());

// $(function() {
//     $('#select-btn').click(function() {
//         $('#current-pic').val('.recEmail');
//     });
// });

// $(function () {
//     $('#select-btn').click(function () {
//         //     let picAddress = fetch($('#current-pic'));
//         //    console.log(picAddress);

//         fetch($('#current-pic').src)
//             .then(res => res.blob())
//             .then(blob => handler(blob))

//     });
// });



// function handler(blob) {
//     const url = URL.createObjectURL(blob);
//     const img = new Image();
//     img.src = url;
//     img.onload = () => {
//         document.querySelector('.recEmail').appendChild(img);
//     }
// }

// const selected = document.querySelector('#select-btn');
// const data = "Testing Blob";

// // Create a blob 
// const blob = new Blob([data], {type: 'text/plain'});

// // Create URL for data in blob

// const url = URL.createObjectURL(blob);
// console.log(url);

// // set as href
// selected.href = url;

// fetch($('#current-pic').src)
// .then(res => res.blob())
// .then(blob => handler(blob))

// function handler(blob) {
//     const url = URL.createObjectURL(blob);
//     const img = new Image();
//     img.src = url;
//     img.onload =() => {
//         document.body.appendChild(img);

//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         canvas.height = img.naturalHeight;
//         canvas.width = img.naturalWidth;

//         ctx.drawImage(img, 0, 0);
//         canvas.toBlob((newBlob) => {
//             const newURL = URL.createObjectURL(newBlob);
//             const newImg = new Image();
//             newImg.src = newURL;
//             newImg.onload = () => {
//                 document.body.appendChild(newImg);
//                 console.log(newURL);
//             }
//         })

//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#select-btn').addEventListener('click', createBlob);
// });



// async function fetchImg() {
//     return await fetch('https://picsum.photos/300.jpg?random=1').then((res) => {
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

// function addImage() {
//     const newImage = document.createElement('image');
//     newImage.src = 'new-image.jpg';
//     newImage.alt = 'New Image';

//     document.getElementById('getImg').appendChild(newImage);
// }





