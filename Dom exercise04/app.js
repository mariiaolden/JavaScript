let bodyRef = document.body;
bodyRef.classList.remove("bg-aqua");
bodyRef.classList.add("bg-olive");
let alineaRef = document.getElementById("first-paragraph");
alineaRef.classList.remove( "bg-lime","gray");
alineaRef.classList.add("aqua");
let classRef = document.getElementsByClassName("bg-silver");
for (let i = 0; i < silverRef.length; i++) {
silverRef[i].classList.add("bg-teal");
silverRef[i].classList.remove("bg-silver");
}
let elementRef = document.getElementsByTagName("blockquote");
for (let i = 0; i < elementRef.length; i++) {
silverRef[i].classList.add("bg-white");
}
================================================================================
let queryRef = document.querySelector("#my-table");
queryRef.classList.add("bg-purple");

let x = document.querySelectorAll("p");
for (let i = 0; i < x.length; i++) {
x[i].classList.add("shadow");
}
================================================================================
let pres = document.getElementsByTagName("pre");
for (let i = 0; i < pres.length; i++) {
pres[i].style.color = "red";
pres[i].style.backgroundColor = "orange";
pres[i].style.borderBottom = "3px solid red";
pres[i].style.borderTop = "3px solid red";
}

let heads = document.getElementsByTagName("h3")[0];
heads.innerHTML = "<em>Italic title ! yeah !</em>";

let level = document.getElementsByTagName("h2")[0];
level.innerHTML = "<strong>HTML doesn't work !</strong>";
================================================================================
let list = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
li.innerHTML=("My best friend is <a href='http://www.google.com'>Google</a>");
list.appendChild(li);
let link = document.querySelectorAll("li a")[0];
link.style.color = "red";
================================================================================
