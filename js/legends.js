$(document).ready(function(){

    //activating all collapsing items
    $('.collapse').collapse();

    //Typing animation using typed.js
    $(".element").typed({
        strings: ["<a>CREATORS</a>", "<a>ENGINEERS</a>", "<a>DESIGNERS</a>", "LEGENDS."],
        contentType: 'html',
        typeSpeed: 100,
        backSpeed: 62,
        backDelay: 3500,
        loop: true,
        showCursor: true
    });
});
