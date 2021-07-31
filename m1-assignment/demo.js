$(document).ready(function(){
        
    /* Open lightbox on click */
$('.lightbox-toggle').click(function(){
    $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('visiblity', 'visible');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
        $('.box').contents().remove('img'); //If true, clear image
    }

    //Get text content in attribute
    var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

    if ($altvalue == "photo1") {
        var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    }
});

/* Click to close lightbox */
$('.close, .backdrop').click(function(){
    $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
        $('.backdrop').css('visiblity', 'hidden');
    });
    $('.box').fadeOut();
});

});