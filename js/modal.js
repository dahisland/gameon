// DOM Elements
const modalbg = document.querySelector(".bground"); // Const for modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for button lauch modal
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const spanClose = document.querySelectorAll(".close"); // Const for span close modal
const form = document.querySelector("form"); // Const for form
const modalBody = document.querySelector(".modal-body"); // Const for form content
const checkboxNewsletter = document.getElementById("checkbox2"); // Const for checkbox non required newsletter
const errorData = document.querySelectorAll(".error-data"); // Const for class attributed to container text errors on validation form
const textThanks = document.querySelector(".text-thanks"); // Const for container <div> with message thanks after a validation form succeed
const input = document.querySelectorAll("input"); // Const for all <input> elements
// Variables for each element contained in Nodelist input
const inputFirstName = input[0];
const inputLastName = input[1];
const inputDataEmail = input[2];
const inputBirthdate = input[3];
const inputQuantityContest = input[4];

// Variables for each element contained in Nodelist class error-data
const errorDataFirstName = errorData[0];
const errorDataLastName = errorData[1];
const errorDataEmail = errorData[2];
const errorDataBirthdate = errorData[3];
const errorDataQuantityContest = errorData[4];
const errorDataLocalisation = errorData[5];
const errorDataConditions = errorData[6];

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

// Add attributes for inputs in form
inputFirstName.setAttribute("min", "2"); // Add a minimum caracters requirment for inputs firstname and lastname
inputLastName.setAttribute("min", "2");

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

//-------------------------------- INPUT VALIDATIONS ON FOCUS
// For the First name input (delete if not used) !!
let firstName = "";

// Function to apply events "input", "focusin" and "focusout" for inputs validations
function eventInputFirstAndLastName(
  inputReferenceNodelist, // Variable name for input in Nodlist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  errReferenceData, // Variable name for div error-data in Nodelist error-data
  styleBorderElse // Style to apply - string
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    if (e.target.value.length < 2) {
      errReferenceData.textContent =
        "* Veuillez indiquer au moins 2 caractères";
      e.target.style.border = "2.8px solid #ff0000";
    } else {
      errReferenceData.textContent = "";
      e.target.style.border = styleBorderElse;
    }
  });
}

// Launch function for FirstName input
eventInputFirstAndLastName(
  inputFirstName,
  "input",
  errorDataFirstName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputFirstName,
  "focusin",
  errorDataFirstName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputFirstName,
  "focusout",
  errorDataFirstName,
  "0.8px solid #ccc"
);

// Launch function for LastName input
eventInputFirstAndLastName(
  inputLastName,
  "input",
  errorDataLastName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputLastName,
  "focusin",
  errorDataLastName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputLastName,
  "focusout",
  errorDataLastName,
  "0.8px solid #ccc"
);

//-------------------------------- FUNCTIONS FOR VALIDATION ELEMENTS IN FORM
// Function for validation First name : Write at least 2 caracters
function validateFirstName() {
  if (inputFirstName.value.length < 2) {
    inputFirstName.style.border = "2.8px solid #ff0000";
    errorDataFirstName.textContent =
      "* Veuillez indiquer au moins 2 caractères";
    return false;
  } else {
    errorDataFirstName.textContent = "";
    inputFirstName.style.border = "0.8px solid #ccc";
    return true;
  }
}

// Function for validation Last name : Write at least 2 caracters
function validateLastName() {
  if (inputLastName.value.length < 2) {
    inputLastName.style.border = "2.8px solid #ff0000";
    errorDataLastName.textContent = "* Veuillez indiquer au moins 2 caractères";
    return false;
  } else {
    errorDataLastName.textContent = "";
    inputLastName.style.border = "0.8px solid #ccc";
    return true;
  }
}

// Function for validation input type radio : Choose a localisation
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
  event.preventDefault(); // Prevent default reloading page after submit

  // launch functions to validate element checkboxes in form
  validateFirstName();
  validateLastName();
  validateLocalisation();
  validateConditions();

  // Validation form
  if (!validateFirstName()) {
    return false;
  } else if (!validateLastName()) {
    return false;
  } else if (!validateLocalisation()) {
    return false;
  } else if (!validateConditions()) {
    return false;
  } else {
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
  }
}
/*
//-----------------------------------------------VALIDATION FORM ON SUBMIT (save)
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
*/
