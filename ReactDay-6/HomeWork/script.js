// 1. Write a program to change the background image of a body using onchange event.

function changeBG(img) {
    document.getElementById("bdy").style.backgroundImage = "url('" + img + "')";
}


// 2. Write a program to change the font family of a paragraph on a button click

function changeFont() {
    document.getElementById("text").style.fontFamily = "Courier New, monospace";
}



// 3. Write a program to change the background color of a body using onchange event

function changeColor(color) {
    document.getElementById("bdy").style.backgroundColor = color;
}



// 4. Change the image according to the color on the particular button

function changeImage(color) {
  if (color == 'red')
    document.getElementById('img1').src = './img/bg1.jpg';
  else if (color == 'green')
    document.getElementById('img1').src = './img/bg2.jpg';
  else if (color == 'blue')
    document.getElementById('img1').src = './img/bg3.jpg';
}