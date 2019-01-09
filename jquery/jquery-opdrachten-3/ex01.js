var count = 0;

$("#clickme").click(function() {
    count++;
    $("#textbox").val("My current count is: "+count);
});


$("#clickme").click(function() {
    count += 120;
    $("#textbox").val("My current count is: "+count);
});
