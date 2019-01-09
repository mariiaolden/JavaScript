// Write your solution here
$( "input" ).focus(function() {
  $(this).css("border","2px solid green");
});
$( "input" ).focusout(function() {
  $(this).css("border","1px solid red");
});
