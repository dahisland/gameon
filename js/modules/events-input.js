import * as variable from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- VALIDATION INPUTS IN FORM ON EVENTS INPUT/FOCUS ------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- This javascript file handles validation events on input while user is filling it -------------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FUNCTION FOR INPUTS TEXT/EMAIL/NUMBER (for events input/focusin/focusout)
//---------------------------------------------------------------------------
// Function for inputs FIRSTNAME/LASTNAME/EMAIL/QUANTITY CONTEST

function eventInputs(
  inputReferenceNodelist, // Variable name for <input> in the Nodelist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  lengthValueMin, // Value of minimum length required
  lengthValueMax, // Value of maximum length required
  regex, // Regex
  errReferenceData, // Variable name for <div class="error-data"> in Nodelist error-data
  textError, // Message displayed when error
  styleBorderElse // Style of border to apply
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    if (
      // Conditions to supprim whitespaces for input EMAIL & QUANTITY CONTEST
      (inputReferenceNodelist === variable.inputEmail) |
      (inputReferenceNodelist === variable.inputQuantityContest)
    ) {
      e.target.value = e.target.value.replace(/\s/g, "");
      e.target.value = e.target.value.replace(/^[\s]/, "");
    } else if (
      // Conditions to limit whitspaces & "-" to 1 for inputs FIRST NAME & LASTNAME
      (inputReferenceNodelist == variable.inputFirstName) |
      (inputReferenceNodelist == variable.inputLastName)
    ) {
      e.target.value = e.target.value.replace(/[\s]{2,}/g, " ");
      e.target.value = e.target.value.replace(/[\-]{2,}/g, "-");
      e.target.value = e.target.value.replace(/^[\s]/, "");
    }
    // Conditions to display error message + change font color & border color when input is invalid
    if (
      (e.target.value.length < lengthValueMin) |
      (e.target.value.length > lengthValueMax) |
      !e.target.value.match(regex)
    ) {
      errReferenceData.style.color = variable.fontColorError;
      errReferenceData.textContent = textError;
      e.target.style.border = variable.borderColorError;
    } else {
      errReferenceData.style.color = variable.fontColorValid;
      errReferenceData.innerHTML = variable.iconValid;
      e.target.style.border = styleBorderElse;
    }
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT BIRTHDATE (on events input/focusin/focusout)
//---------------------------------------------------------------------------
// Function for validation BIRTHDATE on event input & focus
// valid/invalid input by calculating age of user in terms of today's date
// Age minimum required at the time of registration : 12 years old

function eventInputBirthdate(
  typeEvent, // Type of event (input, focusin or focusout) - string
  styleBorderElse // Style of border to apply
) {
  variable.inputBirthdate.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // valueAsDate collects date registered by user on <input> Birthdate on format equals to Date.now()
    // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
    let dataBirthdate = e.target.valueAsDate;

    if (dataBirthdate == null) {
      // Condition when user hasn't filled any values yet (valueAsDate is null)
      variable.errorDataBirthdate.style.color = variable.fontColorError;
      variable.errorDataBirthdate.textContent = variable.textErrorBirthdate;
      variable.inputBirthdate.style.border = variable.borderColorError;
    } else if (
      // Condition when user have 12 years old in the current year
      (dataBirthdate.getFullYear() === variable.yearToday - 12 &&
        dataBirthdate.getMonth() > variable.monthToday) |
      (dataBirthdate.getFullYear() === variable.yearToday - 12 &&
        dataBirthdate.getMonth() === variable.monthToday &&
        dataBirthdate.getDate() > variable.dayToday) |
      // Condition when users has 11 year or less and won't have 12 years old on the current year
      (dataBirthdate.getFullYear() > variable.yearToday - 12) |
      !e.target.value.match(variable.regexBirthdate)
    ) {
      variable.errorDataBirthdate.style.color = variable.fontColorError;
      variable.errorDataBirthdate.textContent = variable.textErrorBirthdate;
      variable.inputBirthdate.style.border = variable.borderColorError;
    } else {
      variable.errorDataBirthdate.style.color = variable.fontColorValid;
      variable.errorDataBirthdate.innerHTML = variable.iconValid;
      variable.inputBirthdate.style.border = styleBorderElse;
    }
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT RADIO (on events input/focusin/focusout)
//---------------------------------------------------------------------------
// Function for validation LOCALISATION contest on event click

function eventInputLocalisation() {
  variable.inputRadio.forEach((radio) =>
    radio.addEventListener("click", () => {
      if (
        // Condition when no input radio is checked
        location1.checked == false &&
        location2.checked == false &&
        location3.checked == false &&
        location4.checked == false &&
        location5.checked == false &&
        location6.checked == false
      ) {
        variable.errorDataLocalisation.style.color = variable.fontColorError;
        variable.errorDataLocalisation.textContent =
          variable.textErrorLocalisation;
      } else {
        variable.errorDataLocalisation.style.color = variable.fontColorValid;
        variable.errorDataLocalisation.innerHTML = variable.iconValid;
      }
    })
  );
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT CHECKBOX (for events input/focusin/focusout)
//---------------------------------------------------------------------------
// Function for validation CONDITIONS on event click

function eventInputConditions() {
  checkbox1.addEventListener("click", () => {
    if (
      // Condition when input checkbox isn't checked
      checkbox1.checked == false
    ) {
      variable.errorDataConditions.style.color = variable.fontColorError;
      variable.errorDataConditions.textContent = variable.textErrorConditions;
      return false;
    } else {
      variable.errorDataConditions.style.color = variable.fontColorValid;
      variable.errorDataConditions.innerHTML = variable.iconValid;
      return true;
    }
  });
}

export {
  eventInputs,
  eventInputBirthdate,
  eventInputLocalisation,
  eventInputConditions,
};
