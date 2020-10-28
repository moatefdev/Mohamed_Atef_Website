$(document).ready(function () {
  $("#shuffle-bar li").on('click', function () {
    // Add and remove clas rec-active
    $(this).addClass('rec-active').siblings().removeClass('rec-active');

    // Go to the needed section
    $('html, body').animate({
      scrollTop: $('#' + $(this).find('a').data('class')).offset().top
    })
  })

  // Positioning the suffle bar at the top when approching to it.
  $(window).on('scroll', function scrollToShuffleBar(){
    if (window.innerWidth > 800 && $(window).scrollTop() >= 235) {
      'use strict';
      $('#shuffle-bar').css({
        'position': 'fixed',
        'top': '0px',
        'left': '50%',
        'transform': 'translate(-50%, 10px)',
        'border-radius': '10px',
        'box-shadow': 'rgb(65 105 225) 1px 3px 12px 0px'
      })
    } else {
      $('#shuffle-bar').css({
        'position': 'static',
        'top': 'auto',
        'left': 'auto',
        'transform': 'translate(0px, 0px)',
        'border-radius': '0px',
        'box-shadow': 'none'
      })
    }
  })
})