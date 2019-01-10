$(document).ready(function(){
let knop = $("#speel");
let value;
let result;
let array=["Rock","Paper","Scissors"];
let compValue;

knop.click(function(){
  let value = $('input[name="knop"]:checked').attr('id');
  let compValue = array[Math.floor(Math.random() * 3)];
  if (value==compValue) {
      alert(value + " - " + compValue + " try again!");
  }else if(value=="Rock" && compValue=="Scissors" ||
           value=="Scissors" && compValue=="Paper" ||
           value=="Paper" && compValue=="Rock"){
        alert(value + " - " + compValue + " you win!");
    }else {
      alert(value + " - " + compValue + " you lose!")
    }
  });
});
