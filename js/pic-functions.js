// Getting the entered email address

$(function () {
    $('#sub-btn').click(function () {
        console.log("This is the email entered: " + $('#input-email').val());
    });
});


// Fetch and display email entered
$(function () {
    $('#sub-btn').click(function () {
        $('.recEmail').text($('#input-email').val());        
    });
});

// Email validation


function validateEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(email).toLowerCase());
}