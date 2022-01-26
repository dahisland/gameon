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

// Variables for each element contained in Nodelist formData
let formDataFirstName = formData[0];
let formDataLastName = formData[1];
let formDataEmail = formData[2];
let formDataBirthdate = formData[3];
let formDataQuantityContest = formData[4];
let formDataLocationContest = formData[5];
let formDataConditions = formData[6];

// Add a class for Nodelist formData containing "conditions d'utilisations"
formDataConditions.classList.add("margin-conditions");

// Launch modal with event : by clicking on <button class="modal-btn">
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal with event : by clicking on <span class="close">
spanClose.forEach((span) => span.addEventListener("click", closeModal));

// Function called to launch modal form by clicking on <button class="modal-btn">
function launchModal() {
  modalbg.style.display = "block";
}

// Function called to close modal by clicking on <span class="close">
function closeModal() {
  modalbg.style.display = "none";
}

// Function for displaying error message data
let errorData = document.createElement("div");
function errorMessage(message, formDataNodeList) {
  errorData.innerHTML = message;
  formDataNodeList.appendChild(errorData);
  errorData.setAttribute("class", "error-data");
}

// Function validate form onsubmit

function validate(event) {
  // if all conditions are respected
  event.preventDefault(); // Prevent default reloading page after submit
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    console.log("erreur location contest");
    errorMessage(
      "* Veuillez cocher au moins une case",
      formDataLocationContest
    );
  } else if (checkbox1.checked == false) {
    console.log("erreur conditions utilisations");
    errorMessage(
      "* Veuillez accepter les conditions d'utilisation",
      formDataConditions
    );
    formDataConditions.insertBefore(errorData, checkboxNewsletter);
  } else {
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
  }
}
