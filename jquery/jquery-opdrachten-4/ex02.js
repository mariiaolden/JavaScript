$(function(){
function count() {
  let salary = $("#salary").val();
  let gender = $("input[name=answer]:checked").val();
  let kids = $("input[name=answer2]:checked").val();
  let result = $("#result");
  let discount = 0;
  let spending = salary/100*18+salary/100*7+salary/100*5;
if (gender == "Female") {
    discount+= spending * 0.02
  };
  if (kids == "3 kids") {
    discount+= spending * 0.01
  } else{
    discount+= spending * 0.02
  };
  let calc = (salary-(spending-discount));
  alert(calc);
};

$("#button").click(function(event){
  event.preventDefault();
  count();
});
});
