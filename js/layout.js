//------------------------------------------------- LAYOUT HTML & CSS ADDED WITH JS
// Add class responsive for responsive design topnav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Add a class for Nodelist formData containing "conditions d'utilisations"
let formDataConditions = formData[6];
formDataConditions.classList.add("margin-conditions");
