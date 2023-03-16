const types_employe = new Map([
  ["software developer", 111],
  ["economist", 222],
  ["web designer", 333]
]);
  
  
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  
  
  
  (function () {
    'use strict';
    fetch("http://localhost:3000/employes")
    .then((response) => response.json())
    .then((data) => {console.log(data)});
  })()


  