import * as variable from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------- VALIDATION INPUTS IN FORM ON EVENT SUBMIT ---------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ----------- This javascript file handles validation form when the user click on the "submit" button ----------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FUNCTION FOR INPUTS TEXT/EMAIL/NUMBER (for event submit)
//---------------------------------------------------------------------------
// Function for validation inputs FIRSTNAME/LASTNAME/EMAIL/QUANTITY CONTEST

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
    inputReferenceNodelist.style.border = variable.borderColorError;
    errReferenceData.style.color = variable.fontColorError;
    errReferenceData.textContent = textError;
    return false;
  } else {
    errReferenceData.style.color = variable.fontColorValid;
    errReferenceData.innerHTML = variable.iconValid;
    inputReferenceNodelist.style.border = variable.borderColorInitial;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT BIRTHDATE (for event submit)
//---------------------------------------------------------------------------
// Valid/invalid input by calculating age of user in terms of current date
// Age minimum required at the time of registration : 12 years old

function validateInputBirthdate() {
  // valueAsDate collects date registered on <input> Birthdate on format equals to Date.now()
  // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
  let dateBirthdate = variable.inputBirthdate.valueAsDate;
  if (dateBirthdate === null) {
    // Condition when user hasn't filled any values yet (valueAsDate is null)
    variable.errorDataBirthdate.style.color = variable.fontColorError;
    variable.errorDataBirthdate.textContent = variable.textErrorBirthdate;
    variable.inputBirthdate.style.border = variable.borderColorError;
  } else if (
    // Condition when user have 12 years old in the current year
    (dateBirthdate.getFullYear() === variable.yearToday - 12 &&
      dateBirthdate.getMonth() > variable.monthToday) |
    (dateBirthdate.getFullYear() === variable.yearToday - 12 &&
      dateBirthdate.getMonth() === variable.monthToday &&
      dateBirthdate.getDate() > variable.dayToday) |
    // Condition when users has 11 year or less and won't have 12 years old on the current year
    (dateBirthdate.getFullYear() > variable.yearToday - 12) |
    !variable.inputBirthdate.value.match(variable.regexBirthdate)
  ) {
    variable.errorDataBirthdate.style.color = variable.fontColorError;
    variable.errorDataBirthdate.textContent = variable.textErrorBirthdate;
    variable.inputBirthdate.style.border = variable.borderColorError;
  } else {
    variable.errorDataBirthdate.style.color = variable.fontColorValid;
    variable.errorDataBirthdate.innerHTML = variable.iconValid;
    variable.inputBirthdate.style.border = variable.borderColorInitial;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT RADIO (for event submit)
//---------------------------------------------------------------------------
// Function for validation input[type=radio] : Choose a LOCALISATION CONTEST

function validateLocalisation() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    variable.errorDataLocalisation.style.color = variable.fontColorError;
    variable.errorDataLocalisation.textContent = variable.textErrorLocalisation;
    return false;
  } else {
    variable.errorDataLocalisation.style.color = variable.fontColorValid;
    variable.errorDataLocalisation.innerHTML = variable.iconValid;
    return true;
  }
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT CHECKBOX (for event submit)
//---------------------------------------------------------------------------
// Function for validation input [type=checkbox] : ACCEPT CONDITIONS

function validateConditions() {
  if (checkbox1.checked == false) {
    variable.errorDataConditions.style.color = variable.fontColorError;
    variable.errorDataConditions.textContent = variable.textErrorConditions;
    return false;
  } else {
    variable.errorDataConditions.style.color = variable.fontColorValid;
    variable.errorDataConditions.innerHTML = variable.iconValid;
    return true;
  }
}

export {
  validateInputs,
  validateInputBirthdate,
  validateLocalisation,
  validateConditions,
};
