var x = document.querySelector("#rangePosX")
var y = document.querySelector("#rangePosY");
var size = document.querySelector("#rangeSize");
var op = document.querySelector("#rangeOp");
var list = document.getElementById("list");
var hex = document.querySelector("#hex");
var r = document.getElementById("rangeR");
var g = document.getElementById("rangeG");
var b = document.getElementById("rangeB");
var a = document.getElementById("rangeA");
var long= document.querySelector("#rangeLong");

let accept = document.getElementById("accept");
let sliderRGBA = document.getElementById("color");
let figure = document.querySelector("section");

x.addEventListener("change", function(){
    figure.style.left = x.value + "px";
});

y.addEventListener("change", function(){
    figure.style.top = y.value + "px";
});

size.addEventListener("change", function(){
    figure.style.transform = "scale(" + size.value + ")";
});

op.addEventListener("change", function(){
    figure.style.opacity = op.value;
});

accept.addEventListener("click", function(){
    figure.className = "";
    figure.classList.add(list.value);
});

hex.addEventListener("change", function(){
    figure.style.backgroundColor = "#" + hex.value;
});

sliderRGBA.addEventListener("change", function(){
    figure.style.backgroundColor = "rgba(" + r.value + "," + g.value + "," + b.value + "," + a.value + ")"; 
});

long.addEventListener("change", function(){
    figure.style.height = long.value + "px";
});