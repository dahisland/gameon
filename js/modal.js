// -------------------------------------------------------------------------- //
// ---------------------------- CLOSE/LAUNCH MODAL -------------------------- //
// -------------------------------------------------------------------------- //
// This javascript file handles launch/close modal form by clicking on buttons

//--------------------------
//----- LAUCH MODAL --------
//--------------------------

// Function called to launch modal form by clicking on <button class="modal-btn">
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

//--------------------------
//------ CLOSE MODAL -------
//--------------------------

// Function called to close modal by clicking on <span class="close">
function closeModal() {
  modalbg.style.display = "none";
}
// Calls function closeModal with event "click" on <span class="close">
spanClose.forEach((span) => span.addEventListener("click", closeModal));
