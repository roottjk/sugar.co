/* Change Color on Scroll Different Functions */

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 270) {
         $('.wrapper').addClass('changeColorWhite')
      }
      if ($(this).scrollTop() < 270) {
         $('.wrapper').removeClass('changeColorWhite')
      }
      if ($(this).scrollTop() > 3000) {
         $('.wrapper').removeClass('changeColorWhite')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 3000) {
         $('.wrapper').addClass('changeColorLight')
      }
      if ($(this).scrollTop() < 3000) {
         $('.wrapper').removeClass('changeColorLight')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1900) {
         $('body').addClass('changeColorBlue')
      }
      if ($(this).scrollTop() < 1900) {
         $('body').removeClass('changeColorBlue')
      }
   });
});

/* Menu Toggle and other active Functions */
$(document).ready(function(){
   $('.menu-toggle').click(function(){
     $('.menu-toggle').toggleClass('active')
     $('.main-nav').toggleClass('active')
     $('.wrapper').toggleClass('active')
     $('.social').toggleClass('active')
     $('h1').toggleClass('active')
   })
   })

/* Parallax Products */
function splitScroll() {
   const controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
       duration: '200%',
       triggerElement: '.product-title',
       triggerHook: 0
   })
   .setPin('.product-title')
   .addIndicators()
   .addTo(controller);
}

splitScroll();

/*
function myFunction(x) {
   if (x.matches) { // If media query matches
       $('.products').addClass('displaynone')
   }
   else
   $('.products').removeClass('displaynone')
 }

 var x = window.matchMedia("(max-width: 628px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes*/