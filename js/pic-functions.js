// $(function() {
//     $('sub-btn').click(function () {
//         $('.recEmail').text($('#email').val());
//     });
// })

selectedPic = [];

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

$(function() {
    $('#select-btn').click(function() {
        let picAddress = fetch($('#current-pic'));
        console.log(picAddress);
    });
});