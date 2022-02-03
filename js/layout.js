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

// Event on click for navbar (active)
function navbar(spanActive, spanInactive1, spanInactive2, spanInactive3) {
  spanActive.addEventListener("click", () => {
    spanActive.classList.add("active");

    spanInactive1.classList.remove("active");
    spanInactive2.classList.remove("active");
    spanInactive3.classList.remove("active");
  });
}

navbar(spanDetails, spanEvents, spanPropos, spanContact);
navbar(spanContact, spanDetails, spanEvents, spanPropos);
navbar(spanPropos, spanDetails, spanEvents, spanContact);
navbar(spanEvents, spanPropos, spanDetails, spanContact);
