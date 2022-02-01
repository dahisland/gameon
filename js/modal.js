// ------------------------------------------LAUNCH MODAL WITH LINK "Je m'inscris"
// Function called to launch modal form by clicking on <button class="modal-btn">

function launchModal() {
  modalbg.style.display = "block";
  // function used to reset form if a precedent form has been submitted
  function resetForm() {
    form.reset();
  }
  // Call function reset
  resetForm();
  // Reset messages error
  errorDataFirstName.textContent = "";
  errorDataLastName.textContent = "";
  errorDataEmail.textContent = "";
  errorDataBirthdate.textContent = "";
  errorDataQuantityContest.textContent = "";
  errorDataLocalisation.textContent = "";
  errorDataConditions.textContent = "";
  // Reset red borders for inputs
  inputFirstName.style.border = "0.8px solid #ccc";
  inputLastName.style.border = "0.8px solid #ccc";
  inputEmail.style.border = "0.8px solid #ccc";
  inputBirthdate.style.border = "0.8px solid #ccc";
  inputQuantityContest.style.border = "0.8px solid #ccc";
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
