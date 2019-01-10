$( document ).ready(function() {
 let emailcheck = /^[\w\-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
 $("#button").click(function(event){
   event.preventDefault();
let email = $("#email").val();
if (emailcheck.test(email)) {
alert("email is valid");
}
else {
alert("email is not valid")
alert(email);
}
if (/^[0-9]+$/.test($('#nummer').val())) {
   alert('right nummer');
} else {
   alert('false nummer');
}
let namecheck = /^[a-zA-Z-]+$/;
let name = $("#name").val();
if (namecheck.test(name)) {
  alert("name is valid");
}else{
  alert("name is not valid");
}
let lastname = $("#lastname").val();
if (namecheck.test(lastname)) {
  alert("lastname is valid");
}else{
  alert("lastname is not valid");
}
 });
});
