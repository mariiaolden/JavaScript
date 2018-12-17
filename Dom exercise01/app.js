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
