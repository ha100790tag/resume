// JavaScript source code
$(document).ready(function () {

    $(".accordion").accordion();

    $('.nav li').click(function () {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.cube').css({
            'transition': '2s linear'
        });
    });

    $('.nav li:nth-child(1)').click(function () { 
        $('.cube').css({
            "transform": "",
        });
    });

    $('.nav li:nth-child(2)').click(function () {       
         $('.cube').css({
            "transform": "rotateY(-90deg)",
          });
    });

    $('.nav li:nth-child(3)').click(function () {
        $('.cube').css({
            "transform": "rotateY(-180deg)",
        });
    });

    $('.nav li:nth-child(4)').click(function () {
        $('.cube').css({
            "transform": "translateZ(150px)",
        });
    });

    $('.nav li:nth-child(5)').click(function () {
        $('.cube').css({
            "transform": "rotateX(90deg) rotateY(180deg)",
        });
    });

    $('.nav li:nth-child(6)').click(function () {
        $('.cube').css({
            "transform": "rotateX(-90deg)",
        });
    });
  
});