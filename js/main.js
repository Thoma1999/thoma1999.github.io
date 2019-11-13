$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});


$(document).ready(function () {


    $('.hamburger').on('click', function () {
        if($('.top-nav').is(":visible")){
          $('.hamburger').removeClass('is-active');
          $('.top-nav').fadeOut(250);
          $('.top-nav').removeClass('open');
        }else {
          $(".hamburger").toggleClass('is-active');
          $('body').css("overflow","hidden");
          $('.top-nav').fadeTo(250, 0.9);
          $('.top-nav').toggleClass('open');
        };
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.hamburger').removeClass('is-active');
        $('.top-nav').removeClass('open');
        $('.top-nav').fadeOut(250);

    });

    $('nav a[href*="#"]').on('click', function () {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 100
      },);
    });

    $('#up').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, );
    });


    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    });
});
