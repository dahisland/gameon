// -------------------------------------------------------------------------- //
// ---------------------------------- LAYOUTS ------------------------------- //
// -------------------------------------------------------------------------- //
// This javascript contains functions for interact with HTML/CSS layout

// -------------------- RESPONSIVE TOPNAV -------------------- //
// Add class responsive for responsive design topnav

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ------------- FORM-DATA CONDITIONS/NEWSLETTER ------------ //
// Add a class for Nodelist formData containing "conditions d'utilisations"

let formDataConditions = formData[6];
formDataConditions.classList.add("margin-conditions");

// ----------------------- NAVIGATION ----------------------- //
// Events by clicking on elements <a> in navbar

function navbar(spanActive, spanInactive1, spanInactive2, spanInactive3) {
  spanActive.addEventListener("click", () => {
    // Add class "active" to element <a> actived
    spanActive.classList.add("active");
    // Remove class "active" to others elements <a>
    spanInactive1.classList.remove("active");
    spanInactive2.classList.remove("active");
    spanInactive3.classList.remove("active");
  });
}
navbar(spanDetails, spanEvents, spanPropos, spanContact);
navbar(spanContact, spanDetails, spanEvents, spanPropos);
navbar(spanPropos, spanDetails, spanEvents, spanContact);
navbar(spanEvents, spanPropos, spanDetails, spanContact);
