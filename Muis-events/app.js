let hoverMe = function(event){
event.target.style.display = "none";
}

let div1 = document.getElementsByClassName("hoverMe")[0];
let div2 = document.getElementsByClassName("hoverMe")[1];
let div3 = document.getElementsByClassName("hoverMe")[2];

div1.addEventListener ("mouseover", hoverMe);
div2.addEventListener ("mouseover", hoverMe);
div3.addEventListener ("mouseover", hoverMe);
