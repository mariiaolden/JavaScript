$(document).ready(function() {
  $("#send").click(function(event){
    event.preventDefault();
  let namecheck = /^[a-zA-Z-]+$/;
  let name = $("#display-name").val();
  if (namecheck.test(name)) {
    $("#display-name"). removeClass('error').addClass('good');
  }else{
    $("#display-name").addClass('error').removeClass('good');
  }
  let emailcheck = /^[\w\-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;

 let email = $("#email").val();
 if (emailcheck.test(email)) {
   $("#email"). removeClass('error').addClass('good');
 }else {
   $("#email").addClass('error').removeClass('good');
 }
 let passwordcheck = /^[a-z0-9_-]{6,18}$/;
 let password = $("#pass").val();
 if (passwordcheck.test(password)) {
    $("#pass").removeClass('error').addClass('good');
   } else {
    $("#pass").addClass('error').removeClass('good');
   }
let confirm = $('#pass-confirm').val();
if(confirm === password) {
  $("#pass-confirm").removeClass('error').addClass('good');
} else {
   $("#pass-confirm").addClass('error').removeClass('good');
}
 });

});
