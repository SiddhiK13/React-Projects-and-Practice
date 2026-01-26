//1. Practice the following JavaScript events in:
// Mouse Events: onclick, onmousedown, onmouseup, onmouseover, onmouseout

function showMsg() {
    alert("Button clicked!");
}

function downMsg() {
    alert("Mouse button is pressed!");
}

function upMsg() {
    alert("Mouse button released!");
}

function overMsg() {
    alert("Mouse is over the text!");
}

function outMsg() {
    alert("Mouse moved out!");
}



// Form Events: onchange, onfocus, onblur
function changed() {
    alert("Selection changed!");
}

function focusMsg() {
    alert("Input box is focused!");
}

function blurMsg() {
    alert("Textbox lost focus!");
}



// How to get value from HTML form? 

function getValue() {
    let name = document.getElementById("uname").value;
    alert("Entered Name: " + name);
}


// this keyword, 

function highlight(x) {
    x.style.background = "yellow";
}

// setAttribute() method.

function changeImage() {
    document.getElementById("pic").setAttribute("src", "img2.jpg");
}