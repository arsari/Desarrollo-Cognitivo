/*
 *  Codetrotters Intro to Web Development Fall 2016
 *  JS File Final Project
 *  Arturo Santiago-Rivera
 */

$(document).ready(function() {

// panels toggle
  $('#welcome-bar').click(function() {
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#section-1').click(function() {
    $('#welcome').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#section-2').click(function() {
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#section-3').click(function() {
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#section-4').click(function() {
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
  });

// onClick go to location
  $('.wl').click(function() {
    document.location = '#welcome-bar';
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#sl-1').click(function() {
    document.location = '#section-1';
    $('#welcome').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#sl-2').click(function() {
    document.location = '#section-2';
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-3').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#sl-3').click(function() {
    document.location = '#section-3';
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-4').removeClass('in');
  });
  $('#sl-4').click(function() {
    document.location = '#section-4';
    $('#welcome').removeClass('in');
    $('#collapse-1').removeClass('in');
    $('#collapse-2').removeClass('in');
    $('#collapse-3').removeClass('in');
  });

// popover plug-in
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

// tooltip plug-in
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

// .back_to_top floating button
  $(function() {
    var offset = 260;
    var duration = 500;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back_to_top').fadeIn(duration);
        } else {
            $('.back_to_top').fadeOut(duration);
        }
    });

    $('.back_to_top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        $('#welcome').removeClass('in');
        $('#collapse-1').removeClass('in');
        $('#collapse-2').removeClass('in');
        $('#collapse-3').removeClass('in');
        $('#collapse-4').removeClass('in');
        return false;
    });
  });
});
