//Select the  first <h1> element
const headingOne = document.querySelector('h1')

//Select the element of with the class name of "heading two"
const headingTwo =document.querySelector(Welcome);

// select the body element
const bodyEl = document.querySelector("body");

// Changes the "headingOne" variable's text content
headingOne.innerText = "Updated Hello World From Luke!";

// Changes the "headingTwo" variable's text color
headingTwo.style.color = "#ff66cc";

// Change the body's background color, and the text color on click
function updateColors() {
  bodyEl.style.backgroundColor = "#66ff66";
  headingOne.style.color = "#0033cc";
  headingTwo.style.color = "#ff3300";
}