// colors array
let colors = ["blue", "yellow", "red", "green", "orange"];

//get button
// let button = document.getElementById("button");
// //Add event listenter
// button.addEventListener("click", function() {
//   //randomizer
//   var randomColor = colors[Math.floor(Math.random() * colors.length)];
//   //get container
//   let container = document.getElementById("container");

// //   container.style.background = randomColor;
// });



document
  .getElementById("container")
  .addEventListener("mouseover", changeColorMove);
function changeColorMove() {
  this.style.background = "blue";
}
document
  .getElementById("container")
  .addEventListener("click", changeColorUp);
function changeColorUp() {
  this.style.background = "red";
}
document
  .getElementById("container")
  .addEventListener("dblclick", changeColorUp);
function changeColorUp() {
  this.style.background = "green";
}
document.getElementById("container").addEventListener("scroll", )
