import * as vars from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------- LAYOUT --------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// -------------------- This javascript contains functions to interact with HTML/CSS layout ---------------------- //

// -------------------------------------------- NAVIGATION FOR TOPNAV -------------------------------------------- //
// ------------------------ Events for navigation by clicking on elements <a> in the navbar ---------------------- //

// Declaration function
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

// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Function called to launch modal form by clicking on <button class="modal-btn">

// Declaration function
function launchModal() {
  vars.modalbg.style.display = "block";
  // function used to reset form if a precedent form has been submitted
  function resetForm() {
    vars.form.reset();
  }
  // Call function reset (reset the form content)
  resetForm();
  // Reset messages error
  vars.errorDataFirstName.textContent = "";
  vars.errorDataLastName.textContent = "";
  vars.errorDataEmail.textContent = "";
  vars.errorDataBirthdate.textContent = "";
  vars.errorDataNumbers.textContent = "";
  vars.errorDataLocalise.textContent = "";
  vars.errorDataConditions.textContent = "";
  // Change inputs borders red or green to default borders
  vars.inputFirstName.style.border = "0.8px solid #ccc";
  vars.inputLastName.style.border = "0.8px solid #ccc";
  vars.inputEmail.style.border = "0.8px solid #ccc";
  vars.inputBirthdate.style.border = "0.8px solid #ccc";
  vars.inputNumbers.style.border = "0.8px solid #ccc";
  // Style used to display form & hide the "thanks" message if a precedent form has been submitted
  vars.form.style.display = "block";
  vars.textThanks.style.display = "none";
}
// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Function called to close modal by clicking on <span class="close">

// Declaration function
function closeModal() {
  vars.modalbg.style.display = "none";
}

export { navbar, launchModal, closeModal };
