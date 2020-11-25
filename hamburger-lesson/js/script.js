$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('go');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});