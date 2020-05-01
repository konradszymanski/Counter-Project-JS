var x = 0;
var element = document.getElementById("numbers");
element.innerHTML = x;

function addNumber(){
  element.innerHTML = ++x;
}
function subtrNumber(){
  element.innerHTML = x--;
}