$("#plus").click(function(){
var text = parseInt($("#text").val());
text=text+1;
$("#text").val(text);
});
$("#minus").click(function(){
  var text = parseInt($("#text").val());
  text=text-1;
  $("#text").val(text);
});
