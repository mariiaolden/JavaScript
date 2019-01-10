$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    alert($("#name").val()+" "+$("#lastname").val()+", Geboren op "+$("#date").val()+" in "+$("#place").val()+", momenteel een "+$("#work").val()+" in "+$("#company").val())
});
});
