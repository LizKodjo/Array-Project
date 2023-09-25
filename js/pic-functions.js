

$(function () {
    $('#email-form').submit(function(event) {
        event.preventDefault();
    });
});

// Getting the entered email address

$(function () {
    $('#sub-btn').click(function () {
        console.log("This is the email entered: " + $('#email').val());
    });
});

// Showing the next picture
$(function () {
    $('#next-btn').click(function () {
        // console.log('This should change the pic');
        $('.imgChoice').attr("https://picsum.photos/300?random=2");
    });
});


// Fetch and display email entered
$(function () {
    $('#sub-btn').click(function () {
        $('.recEmail').text($('#email').val());        
    });
});

// Email validation
// blank email
$(function () {
    $('#sub-btn').click(function () {
        if ($(!'#email')) {
            $('.errorMsg').text('Please enter an email address');
        }
    });    
});
