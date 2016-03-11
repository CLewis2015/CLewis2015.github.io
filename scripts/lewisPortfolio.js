$(document).ready(function () {
//----part of mobile first design, when menu icon is clicked, nav bar drops down
    $('.navbar').removeClass('open');
    $('.menu-button').on('click', function () {
        $('.navbar').toggleClass('open');
    });
    $('.navbar li').on('click', function () {
        $('.navbar').removeClass('open');
    });
});

