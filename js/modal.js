function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Const for modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for button lauch modal
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const spanClose = document.querySelectorAll(".close"); // Const for span close modal
const form = document.querySelector("form"); // Const for form
const modalBody = document.querySelector(".modal-body"); // Const for form content
const checkboxNewsletter = document.getElementById("checkbox2"); // Const for checkbox non required newsletter
const errorData = document.querySelectorAll(".error-data"); // Const for class attributed to container text errors on validation form

// Variables for each element contained in Nodelist formData
let errorDataFirstName = errorData[0];
let errorDataLastName = errorData[1];
let errorDataEmail = errorData[2];
let errorDataBirthdate = errorData[3];
let errorDataQuantityContest = errorData[4];
let errorDataLocalisation = errorData[5];
let errorDataConditions = errorData[6];

//------------------------------------------------- STYLE CSS ADDED WITH JS
// Add a class for Nodelist formData containing "conditions d'utilisations"
let formDataConditions = formData[6];
formDataConditions.classList.add("margin-conditions");

// ------------------------------------------LAUNCH MODAL WITH LINK "Je m'inscris"
// Function called to launch modal form by clicking on <button class="modal-btn">
function launchModal() {
  modalbg.style.display = "block";
}
// Launch modal with event : by clicking on <button class="modal-btn">
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ---------------------------------------------CLOSE MODAL WITH SPAN <X>
// Function called to close modal by clicking on <span class="close">
function closeModal() {
  modalbg.style.display = "none";
}
// Close modal with event : by clicking on <span class="close">
spanClose.forEach((span) => span.addEventListener("click", closeModal));

//-------------------------------- FUNCTIONS FOR VALIDATION ELEMENTS IN FORM
// Function for validation input type radio : select localisation
function validateLocalisation() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    errorDataLocalisation.textContent = "* Veuillez cocher une localisation";
    validLocalisation = false;
  } else {
    errorDataLocalisation.textContent = "";
    validLocalisation = true;
  }
}
// Function for validation input type checkbox : Accept CGU
function validateConditions() {
  if (checkbox1.checked == false) {
    errorDataConditions.textContent =
      "* Veuillez accepter les conditions d'utilisation";
    validConditions = false;
  } else {
    errorDataConditions.textContent = "";
    validConditions = true;
  }
}

//-----------------------------------------------VALIDATION FORM ON SUBMIT
// Function validate form onsubmit

function validate(event) {
  // if all conditions are respected
  event.preventDefault(); // Prevent default reloading page after submit

  // launch functions to validatie each element in form
  validateLocalisation();
  validateConditions();

  // Validation form
  if (validLocalisation == true && validConditions == true) {
    form.style.display = "none"; // form is hidden to display new content
    // Insert content in HTMl to display a message of thanks
    modalBody.innerHTML =
      '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';
    // Close modal with event : by clicking on <button class="btn-close">
    const buttonClose = document.querySelectorAll(".btn-close"); // const for button close for "thanks" message
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
        window.location.reload();
      })
    );
  } else {
    return false;
  }
}
