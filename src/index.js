import navbar from "../component/navbar.js";
//console.log("navbar",navbar);
import img from "../component/img.js";
console.log(img)

let box = document.querySelector("#navbar");
box.innerHTML = navbar();

let box1 = document.querySelector("#img");
box1.innerHTML =img();