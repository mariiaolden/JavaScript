$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
$("#instructions li:first").click(function(){
  $("#content").css("fontSize","120%");
});


    /* On click: Decrease the font size (80%) */
$("#instructions li:nth-child(2)").click(function(){
  $("#content").css("fontSize","80%");
});


    /* On click: Bold or normalize the green words */


 $(".green").click(function () {
     if($(this).css('text-decoration')=="none"){
         $(this).css('text-decoration', 'underline','bold');
     }
     else
         $(this).css('text-decoration', 'none');
 });
    /* On click: Underline or normalize the red words */


    /* On click: Replace the logo with another image */


    /* On hover: Display the URL of links in a tooltip when hovering over links */


    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

});
