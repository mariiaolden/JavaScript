function showCoords(event) {
    var x = event.clientX;
    var coor = "X coords: " + x;
    document.getElementById("x-axis").innerHTML = coor;
}

function clearCoor() {
  var y = event.clientY;
  var coor = "Y coords: " + y;
  document.getElementById("y-axis").innerHTML = coor;
}
