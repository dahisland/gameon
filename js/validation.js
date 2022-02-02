//-------------------------------- FUNCTIONS FOR VALIDATION ELEMENTS IN FORM

// Function for validation inputs FIRSTNAME/LASTNAME/EMAIL/BIRTHDATE/QUANTITY CONTEST - on submit
function validateInputs(
  inputReferenceNodelist,
  lengthValue,
  regex,
  errReferenceData,
  textError
) {
  if (
    (inputReferenceNodelist.value.length < lengthValue) |
    !inputReferenceNodelist.value.match(regex)
  ) {
    inputReferenceNodelist.style.border = "2.8px solid #ff0000";
    errReferenceData.style.color = "#ff0000";
    errReferenceData.textContent = textError;
    return false;
  } else {
    errReferenceData.style.color = "green";
    errReferenceData.innerHTML = '<i class="fa fa-check"></i>';
    inputReferenceNodelist.style.border = "0.8px solid #ccc";
    return true;
  }
}

function validateInputBirthdate() {
  // valueAsDate collect dat registered on input Birthdate on format equals to Date.now()
  // This allows to use getFullYear(), getMonth() and getDate() to compare values with today's values
  let dataBirthdate = inputBirthdate.valueAsDate;
  if (dataBirthdate == null) {
    // When user hasn't filled any values yet (valueAsDate is null)
    errorDataBirthdate.style.color = "#ff0000";
    errorDataBirthdate.textContent =
      "* Vous devez avoir au moins 12 ans au moment de l'inscription";
    inputBirthdate.style.border = "2.8px solid #ff0000";
  } else if (
    // when user's will have 12 years old on the year
    (dataBirthdate.getFullYear() === yearToday - 12 &&
      dataBirthdate.getMonth() > monthToday) |
    (dataBirthdate.getFullYear() === yearToday - 12 &&
      dataBirthdate.getMonth() === monthToday &&
      dataBirthdate.getDate() > dayToday) |
    // When users has 11 year or less and won't have 12 years old on the year
    (dataBirthdate.getFullYear() > yearToday - 12) |
    !inputBirthdate.value.match(regexBirthdate)
  ) {
    errorDataBirthdate.style.color = "#ff0000";
    errorDataBirthdate.textContent =
      "* Vous devez avoir au moins 12 ans au moment de l'inscription";
    inputBirthdate.style.border = "2.8px solid #ff0000";
  } else {
    errorDataBirthdate.style.color = "green";
    errorDataBirthdate.innerHTML = '<i class="fa fa-check"></i>';
    inputBirthdate.style.border = "0.8px solid #ccc";
  }
}

// Function for validation input type radio : Choose a LOCALISATION CONTEST - on submit
function validateLocalisation() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    errorDataLocalisation.style.color = "#ff0000";
    errorDataLocalisation.textContent = "* Veuillez cocher une localisation";
    return false;
  } else {
    errorDataLocalisation.style.color = "green";
    errorDataLocalisation.innerHTML = '<i class="fa fa-check"></i>';
    return true;
  }
}
// Function for validation input type checkbox : ACCEPT CONDITIONS - on submit
function validateConditions() {
  if (checkbox1.checked == false) {
    errorDataConditions.style.color = "#ff0000";
    errorDataConditions.textContent =
      "* Veuillez accepter les conditions d'utilisation";
    return false;
  } else {
    errorDataConditions.style.color = "green";
    errorDataConditions.innerHTML = '<i class="fa fa-check"></i>';
    return true;
  }
}

//----------------------------------------------- VALIDATION FORM ON SUBMIT

// Function validate form onsubmit
function validate(event) {
  event.preventDefault(); // Prevent default reloading page after submit
  // Call function for Input FIRST NAME
  validateInputs(
    inputFirstName,
    2,
    regexNames,
    errorDataFirstName,
    "* 2 caractères minimum, sans chiffre ni caractères spéciaux"
  );
  // Call function for Input LAST NAME
  validateInputs(
    inputLastName,
    2,
    regexNames,
    errorDataLastName,
    "* 2 caractères minimum, sans chiffre ni caractères spéciaux"
  );
  // Call function for Input EMAIL
  validateInputs(
    inputEmail,
    6,
    regexEmail,
    errorDataEmail,
    "* Veuillez entrer une adresse mail valide"
  );
  // Call function for Input BIRTHDATE
  validateInputBirthdate(event);
  // Call function for Input QUANTITY CONTEST
  validateInputs(
    inputQuantityContest,
    1,
    regexQuantityContest,
    errorDataQuantityContest,
    "* Veuillez entrer un nombre entre 0 et 99"
  );
  // Call function for Input LOCALISATION CONTEST
  validateLocalisation();
  // Call function for Input ACCEPT CONDITIONS
  validateConditions();

  // CONDITIONS FOR SUBMIT ( All functions Inputs must return true)
  if (
    // If function for Input FIRST NAME return false
    !validateInputs(
      inputFirstName,
      2,
      regexNames,
      errorDataFirstName,
      "* 2 caractères minimum, sans chiffre ni caractères spéciaux"
    )
  ) {
    return false;
  } else if (
    // If function for Input LAST NAME return false
    !validateInputs(
      inputLastName,
      2,
      regexNames,
      errorDataLastName,
      "* 2 caractères minimum, sans chiffre ni caractères spéciaux"
    )
  ) {
    return false;
  } else if (
    // If function for Input EMAIL return false
    !validateInputs(
      inputEmail,
      6,
      regexEmail,
      errorDataEmail,
      "* Veuillez entrer une adresse mail valide"
    )
  ) {
    return false;
  } else if (
    // If function for Input BIRTHDATE return false
    !validateInputs(
      inputBirthdate,
      8,
      regexBirthdate,
      errorDataBirthdate,
      "* Vous devez avoir au moins 12 ans au moment de l'inscription"
    )
  ) {
    return false;
  } else if (
    // If function for Input QUANTITY CONTEST return false
    !validateInputs(
      inputQuantityContest,
      1,
      regexQuantityContest,
      errorDataQuantityContest,
      "* Veuillez entrer un nombre entre 0 et 99"
    )
  ) {
    return false;
  } else if (
    // If function for Input LOCALISATION CONTEST return false
    !validateLocalisation()
  ) {
    return false;
  } else if (
    // If function for Input ACCEPT CONDITIONS return false
    !validateConditions()
  ) {
    return false;
  } else {
    // Form is valid => form is hidden
    form.style.display = "none";
    // Form is valid => a "message thanks" is displayed
    textThanks.style.display = "block";
    textThanks.innerHTML =
      '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';
    // Form is valid => a close button is displayed to close modal
    const buttonClose = document.querySelectorAll(".btn-close");
    // Call function Close modal on click
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
      })
    );
    return true;
  }
}
