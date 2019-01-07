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

    $("#instructions li:nth-child(3)").click(function () {
        $(".green").toggleClass('boldUnderlined');
    });

        /* On click: Underline or normalize the red words */

    $("#instructions li:nth-child(4)").click(function () {
        $(".red").toggleClass('underlined');
    });


        /* On click: Replace the logo with another image */

    $("#instructions li:nth-child(5)").hover(function () {
        if($('img').attr('src') === 'images/jquery-logo.png') {
            $('img').attr('src', 'images/koala.jpg');
        } else {
            $('img').attr('src', 'images/jquery-logo.png');
        }
    });

        /* On hover: Display the URL of links in a tooltip when hovering over links */

    $("a").hover(function() {
        $(this).attr("title", $(this).attr("href"));
    });


        /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

    $("#instructions li:nth-child(7)").click(function () {
        $('<p>Chapter 1:</p>').insertBefore($('h2').first());
        $('<p>Chapter 2:</p>').insertBefore($('h2')[1]);
    });

});
