// -------------------------------------------------------------------------- //
// ---------------- FUNCTIONS FOR VALIDATION INPUTS IN FORM ----------------- //
// -------------------------------------------------------------------------- //
// This javascript file handles validation form when the user click on the "submit" button

// -------------------- DECLARATION FUNCTIONS -------------------- //

//-------------------------------------
// FUNCTION FOR INPUTS TEXT/EMAIL/NUMBER
//-------------------------------------
// Function for validation inputs FIRSTNAME/LASTNAME/EMAIL/QUANTITY CONTEST
// Called on submit

function validateInputs(
  inputReferenceNodelist,
  lengthValueMin,
  lengthValueMax,
  regex,
  errReferenceData,
  textError
) {
  if (
    // Conditions to display error message + change font color & border color when input is invalid on submit
    (inputReferenceNodelist.value.length < lengthValueMin) |
    (inputReferenceNodelist.value.length > lengthValueMax) |
    !inputReferenceNodelist.value.match(regex)
  ) {
    inputReferenceNodelist.style.border = borderColorError;
    errReferenceData.style.color = fontColorError;
    errReferenceData.textContent = textError;
    return false;
  } else {
    errReferenceData.style.color = fontColorValid;
    errReferenceData.innerHTML = iconValid;
    inputReferenceNodelist.style.border = borderColorInitial;
    return true;
  }
}
//-------------------------------------
// FUNCTION FOR INPUT BIRTHDATE
//-------------------------------------
// valid/invalid input by calculating age of user in terms of today's date
// Age minimum required at the time of registration : 12 years old
// Called on submit

function validateInputBirthdate() {
  // valueAsDate collects date registered on <input> Birthdate on format equals to Date.now()
  // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
  let dataBirthdate = inputBirthdate.valueAsDate;
  if (dataBirthdate == null) {
    // Condition when user hasn't filled any values yet (valueAsDate is null)
    errorDataBirthdate.style.color = fontColorError;
    errorDataBirthdate.textContent = textErrorBirthdate;
    inputBirthdate.style.border = borderColorError;
  } else if (
    // Condition when user have 12 years old in the current year
    (dataBirthdate.getFullYear() === yearToday - 12 &&
      dataBirthdate.getMonth() > monthToday) |
    (dataBirthdate.getFullYear() === yearToday - 12 &&
      dataBirthdate.getMonth() === monthToday &&
      dataBirthdate.getDate() > dayToday) |
    // Condition when users has 11 year or less and won't have 12 years old on the current year
    (dataBirthdate.getFullYear() > yearToday - 12) |
    !inputBirthdate.value.match(regexBirthdate)
  ) {
    errorDataBirthdate.style.color = fontColorError;
    errorDataBirthdate.textContent = textErrorBirthdate;
    inputBirthdate.style.border = borderColorError;
  } else {
    errorDataBirthdate.style.color = fontColorValid;
    errorDataBirthdate.innerHTML = iconValid;
    inputBirthdate.style.border = borderColorInitial;
  }
}

//-------------------------------------
// FUNCTION FOR INPUT RADIO
//-------------------------------------
// Function for validation <input [type=radio]> : Choose a LOCALISATION CONTEST
// Called on submit

function validateLocalisation() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    errorDataLocalisation.style.color = fontColorError;
    errorDataLocalisation.textContent = textErrorLocalisation;
    return false;
  } else {
    errorDataLocalisation.style.color = fontColorValid;
    errorDataLocalisation.innerHTML = iconValid;
    return true;
  }
}

//-------------------------------------
// FUNCTION FOR INPUT CHECKBOX
//-------------------------------------
// Function for validation input type checkbox : ACCEPT CONDITIONS
// Called on submit

function validateConditions() {
  if (checkbox1.checked == false) {
    errorDataConditions.style.color = fontColorError;
    errorDataConditions.textContent = textErrorConditions;
    return false;
  } else {
    errorDataConditions.style.color = fontColorValid;
    errorDataConditions.innerHTML = iconValid;
    return true;
  }
}

//-------------------------------------
// FUNCTION VALIDATION ON SUBMIT
//-------------------------------------

function validate(event) {
  event.preventDefault(); // Prevent default reloading page on submit
  // Call function for Input FIRST NAME
  validateInputs(
    inputFirstName,
    2,
    30,
    regexNames,
    errorDataFirstName,
    textErrorNames
  );
  // Call function for Input LAST NAME
  validateInputs(
    inputLastName,
    2,
    30,
    regexNames,
    errorDataLastName,
    textErrorNames
  );
  // Call function for Input EMAIL
  validateInputs(inputEmail, 6, 40, regexEmail, errorDataEmail, textErrorEmail);
  // Call function for Input BIRTHDATE
  validateInputBirthdate(event);
  // Call function for Input QUANTITY CONTEST
  validateInputs(
    inputQuantityContest,
    1,
    2,
    regexQuantityContest,
    errorDataQuantityContest,
    textErrorQuantity
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
      30,
      regexNames,
      errorDataFirstName,
      textErrorNames
    )
  ) {
    return false;
  } else if (
    // If function for Input LAST NAME return false
    !validateInputs(
      inputLastName,
      2,
      30,
      regexNames,
      errorDataLastName,
      textErrorNames
    )
  ) {
    return false;
  } else if (
    // If function for Input EMAIL return false
    !validateInputs(
      inputEmail,
      6,
      40,
      regexEmail,
      errorDataEmail,
      textErrorEmail
    )
  ) {
    return false;
  } else if (
    // If function for Input BIRTHDATE return false
    !validateInputs(
      inputBirthdate,
      8,
      12,
      regexBirthdate,
      errorDataBirthdate,
      textErrorBirthdate
    )
  ) {
    return false;
  } else if (
    // If function for Input QUANTITY CONTEST return false
    !validateInputs(
      inputQuantityContest,
      1,
      2,
      regexQuantityContest,
      errorDataQuantityContest,
      textErrorQuantity
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
    textThanks.innerHTML = messageThanks;
    // Form is valid => a close button is displayed to close modal
    const buttonClose = document.querySelectorAll(".btn-close");
    // Th close button calls function closeModal on click
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
      })
    );
    return true;
  }
}
