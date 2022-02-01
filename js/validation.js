//-------------------------------- FUNCTIONS FOR VALIDATION ELEMENTS IN FORM
// Function for validation First name : Write at least 2 caracters, exclude special caracters & numbers
function validateFirstName() {
  if (
    (inputFirstName.value.length < 2) |
    !inputFirstName.value.match(regexNames)
  ) {
    inputFirstName.style.border = "2.8px solid #ff0000";
    errorDataFirstName.textContent =
      "* 2 caractères minimum, sans chiffre ni caractères spéciaux";
    errorDataFirstName.style.color = "#ff0000";

    return false;
  } else {
    errorDataFirstName.innerHTML = '<i class="fa fa-check"></i>';
    errorDataFirstName.style.color = "green";
    inputFirstName.style.border = "0.8px solid #ccc";
    return true;
  }
}
// Function for validation Last name : Write at least 2 caracters, exclude special caracters & numbers
function validateLastName() {
  if (
    (inputLastName.value.length < 2) |
    !inputLastName.value.match(regexNames)
  ) {
    inputLastName.style.border = "2.8px solid #ff0000";
    errorDataLastName.textContent =
      "* 2 caractères minimum, sans chiffre ni caractères spéciaux";
    errorDataLastName.style.color = "#ff0000";
    return false;
  } else {
    errorDataLastName.innerHTML = '<i class="fa fa-check"></i>';
    errorDataLastName.style.color = "green";
    inputLastName.style.border = "0.8px solid #ccc";
    return true;
  }
}
// Function for validation Email on format x@xxx.xx
function validateEmail() {
  if ((inputEmail.value.length < 6) | !inputEmail.value.match(regexEmail)) {
    inputEmail.style.border = "2.8px solid #ff0000";
    errorDataEmail.textContent = "* Veuillez entrer une adresse mail valide";
    errorDataEmail.style.color = "#ff0000";
    return false;
  } else {
    errorDataEmail.innerHTML = '<i class="fa fa-check"></i>';
    errorDataEmail.style.color = "green";
    inputEmail.style.border = "0.8px solid #ccc";
    return true;
  }
}
// Function for validation Birthdate between 01/01/1900 & 31/12/2019
function validateBirthdate() {
  if (
    (inputBirthdate.value.length < 8) |
    !inputBirthdate.value.match(regexBirthdate)
  ) {
    inputBirthdate.style.border = "2.8px solid #ff0000";
    errorDataBirthdate.textContent =
      "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019";
    errorDataBirthdate.style.color = "#ff0000";
    return false;
  } else {
    errorDataBirthdate.innerHTML = '<i class="fa fa-check"></i>';
    errorDataBirthdate.style.color = "green";
    inputBirthdate.style.border = "0.8px solid #ccc";
    return true;
  }
}
// Function for validation Quantity Contest (number between 1 & 99)
function validateQuantityContest() {
  if (
    (inputQuantityContest.value.length < 1) |
    !inputQuantityContest.value.match(regexQuantityContest)
  ) {
    inputQuantityContest.style.border = "2.8px solid #ff0000";
    errorDataQuantityContest.textContent =
      "* Veuillez entrer un nombre entre 1 et 99";
    errorDataQuantityContest.style.color = "#ff0000";
    return false;
  } else {
    errorDataQuantityContest.innerHTML = '<i class="fa fa-check"></i>';
    errorDataQuantityContest.style.color = "green";
    inputQuantityContest.style.border = "0.8px solid #ccc";
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
    errorDataLocalisation.style.color = "#ff0000";
    return false;
  } else {
    errorDataLocalisation.innerHTML = '<i class="fa fa-check"></i>';
    errorDataLocalisation.style.color = "green";
    return true;
  }
}
// Function for validation input type checkbox : Accept CGU
function validateConditions() {
  if (checkbox1.checked == false) {
    errorDataConditions.textContent =
      "* Veuillez accepter les conditions d'utilisation";
    errorDataConditions.style.color = "#ff0000";
    return false;
  } else {
    errorDataConditions.innerHTML = '<i class="fa fa-check"></i>';
    errorDataConditions.style.color = "green";
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
  validateEmail();
  validateBirthdate();
  validateQuantityContest();
  validateLocalisation();
  validateConditions();

  // Validation form
  if (!validateFirstName()) {
    return false;
  } else if (!validateLastName()) {
    return false;
  } else if (!validateEmail()) {
    return false;
  } else if (!validateBirthdate()) {
    return false;
  } else if (!validateQuantityContest()) {
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
