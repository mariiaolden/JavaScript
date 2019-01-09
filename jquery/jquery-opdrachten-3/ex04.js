$(document).ready(function(){

  $("#meer").click(function(){
    let height = parseInt($('.rectangle').css('height')) + 10;
    if (height > 100) {
     height = 10;
   }
   $('.rectangle').css('height', height);
    });
  $("#green").click(function(){
    $('.rectangle').addClass('green');
    });
  $("#reset").click(function(){
    $('.rectangle').removeClass('green');
    });
  $("#delete").click(function(){
    $('.rectangle').remove();
  });
  $("#back").click(function(){
    if ($('.rectangle').length === 0) {
      $('body').append($('<div class="rectangle"></div>'));
      }
  });
});
