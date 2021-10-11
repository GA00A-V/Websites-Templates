var first = document.querySelector(".color1");
var second = document.querySelector(".color2");
var css = document.querySelector("h3");
function change(){
    document.body.style.background = "linear-gradient(to right,"+ first.value+ "," +second.value+")";
    css.textContent = document.body.style.background;
}

first.addEventListener('input',change);
second.addEventListener('input',change);