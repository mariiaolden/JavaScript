$(document).ready(function(){
  $("#next").click(function(){;
  let current = $('.active');
  let next = current.next();
  if (!next.length){
    next = $('#slider ul li:first-child');
  }
  current.removeClass('active');
  next.addClass('active');
});
$('#back').click(function () {
  let current = $('.active');
  let prev = current.prev();
  if (!back.length){
    back = $('#slider ul li:last-child');
  }
  prev.removeClass('active');
  back.addClass('active');
});
});
