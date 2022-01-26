// DOM Elements
const modalbg = document.querySelector(".bground"); // Const for modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for button lauch modal
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const spanClose = document.querySelectorAll(".close"); // Const for span close modal
const form = document.querySelector("form"); // Const for form
const modalBody = document.querySelector(".modal-body"); // Const for form content
const checkboxNewsletter = document.getElementById("checkbox2"); // Const for checkbox non required newsletter
const errorData = document.querySelectorAll(".error-data"); // Const for class attributed to container text errors on validation form
const textThanks = document.querySelector(".text-thanks");
// Variables for each element contained in Nodelist formData
let errorDataFirstName = errorData[0];
let errorDataLastName = errorData[1];
let errorDataEmail = errorData[2];
let errorDataBirthdate = errorData[3];
let errorDataQuantityContest = errorData[4];
let errorDataLocalisation = errorData[5];
let errorDataConditions = errorData[6];

//------------------------------------------------- STYLE CSS ADDED WITH JS
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

// ------------------------------------------LAUNCH MODAL WITH LINK "Je m'inscris"
// Function called to launch modal form by clicking on <button class="modal-btn">
function launchModal() {
  modalbg.style.display = "block";
  // function used to reset form if a precedent form has been submitted
  function resetForm() {
    form.reset();
  }
  // call function reset
  resetForm();
  // reset messages error
  errorDataLocalisation.textContent = "";
  errorDataConditions.textContent = "";
  // Style used to display form & hide thanks message if a precedent form has been submitted
  form.style.display = "block";
  textThanks.style.display = "none";
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
// call function reset

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
    return false;
  } else {
    errorDataLocalisation.textContent = "";
    return true;
  }
}
// Function for validation input type checkbox : Accept CGU
function validateConditions() {
  if (checkbox1.checked == false) {
    errorDataConditions.textContent =
      "* Veuillez accepter les conditions d'utilisation";
    return false;
  } else {
    errorDataConditions.textContent = "";
    return true;
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
  if (validateLocalisation() && validateConditions()) {
    form.style.display = "none"; // form is hidden to display new content
    textThanks.style.display = "block";
    // Insert content in HTMl to display a message of thanks
    textThanks.innerHTML =
      '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';
    // Close modal with event : by clicking on <button class="btn-close">
    const buttonClose = document.querySelectorAll(".btn-close"); // const for button close for "thanks" message
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal(); // Close modal
        //window.location.reload(); // Reload page to reset form if user want to do a new subscribe - not necessary
      })
    );
    return true;
  } else {
    return false;
  }
}
