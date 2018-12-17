let bodyRef = document.body;
bodyRef.classList.remove("bg-aqua");
bodyRef.classList.add("bg-olive");

let alineaRef = document.getElementById("first-paragraph");
alineaRef.classList.remove( "bg-lime","gray");
alineaRef.classList.add("aqua");
let classRef = document.getElementsByClassName("bg-silver");
for (let i = 0; i < classRef.length; i++) {
classRef[i].classList.add("bg-teal");
classRef[i].classList.remove("bg-silver");
}

let elementRef = document.getElementsByTagName("blockquote");
for (let i = 0; i < elementRef.length; i++) {
elementRef[i].classList.add("bg-white");
}
//================================================================================
let queryRef = document.querySelector("#my-table");
queryRef.classList.add("bg-purple");

let x = document.querySelectorAll("p");
for (let i = 0; i < x.length; i++) {
x[i].classList.add("shadow");
}
//================================================================================
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
//================================================================================
let list = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
li.innerHTML=("My best friend is <a href='http://www.google.com'>Google</a>");
list.appendChild(li);
let link = document.querySelectorAll("li a")[0];
link.style.color = "red";
//================================================================================
let liste = document.getElementsByTagName("ol")[0];
let kinderen = liste.children;
let lengte = kinderen.length;
for (let i = 0; i < lengte; i++) {
liste.removeChild(kinderen[0]);
}

let array = ["Silent Teacher","Code Monkey", "CodeCombat"];
let linkarray = ["http://silentteacher.toxicode.fr/","https://www.playcodemonkey.com/","https://codecombat.com/"];
for (var i = 0; i < array.length; i++) {
let entry = document.createElement("li");
let a = document.createElement("a");
a.textContent = array[i];
a.setAttribute('href', linkarray[i]);
entry.appendChild(a);
liste.appendChild(entry);
}
