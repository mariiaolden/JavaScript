
var num = Math.floor(Math.random() * 101);
$("#knop").click(function(){
  var text = $("#text").val();
  text=parseInt(text);
  if(num>text){
    alert("meer");
  } else if(num<text){
    alert("minder");
  }else if(num==text){
    alert("juist");
    num = Math.floor(Math.random() * 101);
  }
});
