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
/* END Change Color on Scroll Different Functions */

/* Menu Toggle and other .active Functions */
$(document).ready(function(){
   $('.menu-toggle').click(function(){
     $('.menu-toggle').toggleClass('active')
     $('.main-nav').toggleClass('active')
     $('.wrapper').toggleClass('active')
     $('.social').toggleClass('active')
     $('h1').toggleClass('active')
   })
   })
/* END Menu Toggle and other .active Functions */

/* Parallax Products */
function splitScroll() {
   const controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
       duration: '185%',
       triggerElement: '.product-title',
       triggerHook: 0.1
   })
   .setPin('.product-title')
   .addTo(controller);
}

splitScroll();
/* END Parallax Products */