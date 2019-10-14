/* Change Color on Scroll Different Functions */

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 270) {
      $(".wrapper").addClass("changeColorDark");
    }
    if ($(this).scrollTop() < 270) {
      $(".wrapper").removeClass("changeColorDark");
    }
    if ($(this).scrollTop() > 1500) {
      $(".wrapper").removeClass("changeColorDark");
    }
  });
});
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
      $(".wrapper").addClass("changeColorLight");
    }
    if ($(this).scrollTop() < 1500) {
      $(".wrapper").removeClass("changeColorLight");
    }
  });
});
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
      $("body").addClass("changeColorBlue");
    }
    if ($(this).scrollTop() < 1500) {
      $("body").removeClass("changeColorBlue");
    }
    if ($(this).scrollTop() > 2800) {
      $("body").addClass("changeColorRed");
    }
    if ($(this).scrollTop() < 2800) {
      $("body").removeClass("changeColorRed");
    }
  });
});
/* END Change Color on Scroll Different Functions */

/* Menu Toggle and other .active Functions */
$(document).ready(function() {
  var ToggleActive = 0;

  $(".menu-toggle").click(function openclose() {
    if (ToggleActive != 1) {
      $(".menu-toggle").toggleClass("active");
      $(".main-nav").toggleClass("active");
      $(".wrapper").toggleClass("active");
      $(".social").toggleClass("active");
      $("h1").toggleClass("active");
      ToggleActive = 1;
    } else {
      $(".menu-toggle").toggleClass("active", false);
      $(".main-nav").toggleClass("active", false);
      $(".wrapper").toggleClass("active", false);
      $(".social").toggleClass("active", false);
      $("h1").toggleClass("active", false);
      ToggleActive = 0;
    }
  });
  $(".main-nav").click(function close() {
    $(".menu-toggle").toggleClass("active", false);
    $(".main-nav").toggleClass("active", false);
    $(".wrapper").toggleClass("active", false);
    $(".social").toggleClass("active", false);
    $("h1").toggleClass("active", false);
    ToggleActive = 0;
  });
});

/* END Menu Toggle and other .active Functions */
