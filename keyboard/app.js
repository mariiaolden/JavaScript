let colors = function(e){
let x = e.keyCode;
  let y = document.getElementById("character").style;
switch(x) {
  case x = 96:
    y.backgroundColor = "#ff0000";
    break;
  case x = 97:
    y.backgroundColor = "#0400ff";
    break;
  case x = 98:
    y.backgroundColor = "#19ff00";
    break;
  case x = 99:
      y.backgroundColor = "#000";
    break;
  case x = 100:
      y.backgroundColor = "#6d6767";
    break;
  case x = 101:
      y.backgroundColor = "#ee00ff";
    break;
  case x = 102:
      y.backgroundColor = "#d33f7d";
    break;
  case x = 103:
      y.backgroundColor = "#faff00";
    break;
  case x = 104:
      y.backgroundColor = "#ed7512";
    break;
  case x = 105:
      y.backgroundColor = "#fff";
    break;
  default:
      y.backgroundColor = "#020235";
};
};
window.addEventListener("keydown", colors );
