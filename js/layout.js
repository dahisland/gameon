// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------- LAYOUT --------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// -------------------- This javascript contains functions to interact with HTML/CSS layout ---------------------- //

// ---------------------------------------------- RESPONSIVE TOPNAV ---------------------------------------------- //
// ----------------------------- Function to add a class for responsive design topnav ---------------------------- //

navIcon.addEventListener("click", () => {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
});
// --------------------------------------- FORM-DATA CONDITIONS/NEWSLETTER --------------------------------------- //
// -------------- Event to add a class for Nodelist formData containing "conditions d'utilisations" -------------- //

formDataConditions.classList.add("margin-conditions");

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
// Call function for each <span> contained in a <a> on topnav
navbar(spanDetails, spanEvents, spanPropos, spanContact);
navbar(spanContact, spanDetails, spanEvents, spanPropos);
navbar(spanPropos, spanDetails, spanEvents, spanContact);
navbar(spanEvents, spanPropos, spanDetails, spanContact);

// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Function called to launch modal form by clicking on <button class="modal-btn">

// Declaration function
function launchModal() {
  modalbg.style.display = "block";
  // function used to reset form if a precedent form has been submitted
  function resetForm() {
    form.reset();
  }
  // Call function reset (reset the form content)
  resetForm();
  // Reset messages error
  errorDataFirstName.textContent = "";
  errorDataLastName.textContent = "";
  errorDataEmail.textContent = "";
  errorDataBirthdate.textContent = "";
  errorDataQuantityContest.textContent = "";
  errorDataLocalisation.textContent = "";
  errorDataConditions.textContent = "";
  // Change inputs borders red or green to default borders
  inputFirstName.style.border = "0.8px solid #ccc";
  inputLastName.style.border = "0.8px solid #ccc";
  inputEmail.style.border = "0.8px solid #ccc";
  inputBirthdate.style.border = "0.8px solid #ccc";
  inputQuantityContest.style.border = "0.8px solid #ccc";
  // Style used to display form & hide the "thanks" message if a precedent form has been submitted
  form.style.display = "block";
  textThanks.style.display = "none";
}
// Calls function lauchModal with event "click" on <button class="modal-btn">
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Function called to close modal by clicking on <span class="close">

// Declaration function
function closeModal() {
  modalbg.style.display = "none";
}
// Calls function closeModal with event "click" on <span class="close">
spanClose.forEach((span) => span.addEventListener("click", closeModal));
