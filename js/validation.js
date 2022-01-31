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

//----------------------------------------------- VALIDATION FORM ON SUBMIT
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
