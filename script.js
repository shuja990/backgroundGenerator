var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("body");
var x = document.getElementsByTagName("input")[0].attributes[3].value; 
var y = document.getElementsByTagName("input")[1].attributes[3].value; 
console.log("x: "+x+" y: "+y);
col1.addEventListener("input",changeColor);
col2.addEventListener("input",changeColor);

function changeColor(){
	css.textContent = body.style.background+";";
	body.style.background = "linear-gradient(to right, "+col1.value+","+col2.value+")";
	css.textContent = body.style.backgroundImage+";";
}
showColor();
function showColor(){
	col1.value = document.getElementsByTagName("input")[0].attributes[3].value;
	col2.value = document.getElementsByTagName("input")[1].attributes[3].value;
	css.textContent = window.getComputedStyle(body, null).getPropertyValue("background-image")

}