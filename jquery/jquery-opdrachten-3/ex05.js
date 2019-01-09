$(document).keydown(function(e) {
  let left = parseInt($('.rectangle').css('left'));
  let top = parseInt($('.rectangle').css('top'));

    switch(e.which) {
        case 37:
        left = left - 1;
        break;

        case 38:
        top = top - 1;
        break;

        case 39:
        left = left + 1;
        break;

        case 40:
        top = top + 1;
        break;

        default: return;
    }
    $('.rectangle').css('left', left);
    $('.rectangle').css('top', top);
    e.preventDefault();
  });
