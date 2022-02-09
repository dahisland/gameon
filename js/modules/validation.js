import * as vars from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- VALIDATION INPUTS FOR EVENTS ---------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ----------- This javascript file handles validation inputs for events input/focusin/focusout/submit ----------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT FIRSTNAME/LASTNAME (for events )
//---------------------------------------------------------------------------
function validateInputNames(inputRefNodelist, errRefData, colorBorder) {
  if (
    // Conditions to display error message + change font color & border color when input is invalid on submit
    (inputRefNodelist.value.length < 2) |
    (inputRefNodelist.value.length > 30) |
    !inputRefNodelist.value.match(vars.regexNames)
  ) {
    inputRefNodelist.style.border = vars.borderColorError;
    errRefData.style.color = vars.fontColorError;
    errRefData.textContent = vars.textErrorNames;
    return false;
  } else {
    errRefData.style.color = vars.fontColorValid;
    errRefData.innerHTML = vars.iconValid;
    inputRefNodelist.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT EMAIL (for events )
//---------------------------------------------------------------------------
function validateInputEmail(colorBorder) {
  if (
    // Conditions to display error message + change font color & border color when input is invalid on submit
    (vars.inputEmail.value.length < 6) |
    (vars.inputEmail.value.length > 40) |
    !vars.inputEmail.value.match(vars.regexEmail)
  ) {
    vars.inputEmail.style.border = vars.borderColorError;
    vars.errorDataEmail.style.color = vars.fontColorError;
    vars.errorDataEmail.textContent = vars.textErrorEmail;
    return false;
  } else {
    vars.errorDataEmail.style.color = vars.fontColorValid;
    vars.errorDataEmail.innerHTML = vars.iconValid;
    vars.inputEmail.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT BIRTHDATE (for event submit)
//---------------------------------------------------------------------------
// Valid/invalid input by calculating age of user in terms of current date
// Age minimum required at the time of registration : 12 years old

function validateInputBirthdate(colorBorder) {
  // valueAsDate collects date registered on <input> Birthdate on format equals to Date.now()
  // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
  let dateBirthdate = vars.inputBirthdate.valueAsDate;
  if (dateBirthdate === null) {
    // Condition when user hasn't filled any values yet (valueAsDate is null)
    vars.errorDataBirthdate.style.color = vars.fontColorError;
    vars.errorDataBirthdate.textContent = vars.textErrorBirthdate;
    vars.inputBirthdate.style.border = vars.borderColorError;
    return false;
  } else if (
    // Condition when user have 12 years old in the current year
    (dateBirthdate.getFullYear() === vars.yearToday - 12 &&
      dateBirthdate.getMonth() > vars.monthToday) |
    (dateBirthdate.getFullYear() === vars.yearToday - 12 &&
      dateBirthdate.getMonth() === vars.monthToday &&
      dateBirthdate.getDate() > vars.dayToday) |
    // Condition when users has 11 year or less and won't have 12 years old on the current year
    (dateBirthdate.getFullYear() > vars.yearToday - 12) |
    !vars.inputBirthdate.value.match(vars.regexBirthdate)
  ) {
    vars.errorDataBirthdate.style.color = vars.fontColorError;
    vars.errorDataBirthdate.textContent = vars.textErrorBirthdate;
    vars.inputBirthdate.style.border = vars.borderColorError;
    return false;
  } else {
    vars.errorDataBirthdate.style.color = vars.fontColorValid;
    vars.errorDataBirthdate.innerHTML = vars.iconValid;
    vars.inputBirthdate.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT NUMBERS (for events )
//---------------------------------------------------------------------------
function validateInputQuantity(colorBorder) {
  if (
    // Conditions to display error message + change font & border color when input is invalid
    (vars.inputNumbers.value.length < 1) |
    (vars.inputNumbers.value.length > 2) |
    !vars.inputNumbers.value.match(vars.regexNumbers)
  ) {
    vars.inputNumbers.style.border = vars.borderColorError;
    vars.errorDataNumbers.style.color = vars.fontColorError;
    vars.errorDataNumbers.textContent = vars.textErrorNumbers;
    return false;
  } else {
    vars.errorDataNumbers.style.color = vars.fontColorValid;
    vars.errorDataNumbers.innerHTML = vars.iconValid;
    vars.inputNumbers.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT RADIO (for event submit)
//---------------------------------------------------------------------------
// Function for validation input[type=radio] : Choose a LOCALISATION CONTEST

function validateLocalise() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    vars.errorDataLocalise.style.color = vars.fontColorError;
    vars.errorDataLocalise.textContent = vars.textErrorLocalise;
    return false;
  } else {
    vars.errorDataLocalise.style.color = vars.fontColorValid;
    vars.errorDataLocalise.innerHTML = vars.iconValid;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT CHECKBOX (for event submit)
//---------------------------------------------------------------------------
// Function for validation input [type=checkbox] : ACCEPT CONDITIONS

function validateConditions() {
  if (checkbox1.checked == false) {
    vars.errorDataConditions.style.color = vars.fontColorError;
    vars.errorDataConditions.textContent = vars.textErrorConditions;
    return false;
  } else {
    vars.errorDataConditions.style.color = vars.fontColorValid;
    vars.errorDataConditions.innerHTML = vars.iconValid;
    return true;
  }
}

export {
  validateInputNames,
  validateInputEmail,
  validateInputBirthdate,
  validateInputQuantity,
  validateLocalise,
  validateConditions,
};
