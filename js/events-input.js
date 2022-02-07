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
      (inputReferenceNodelist == inputEmail) |
      (inputReferenceNodelist == inputQuantityContest)
    ) {
      e.target.value = e.target.value.replace(/\s/g, "");
    } else if (
      // Conditions to limit whitspaces & "-" to 1 for inputs FIRST NAME & LASTNAME
      (inputReferenceNodelist == inputFirstName) |
      (inputReferenceNodelist == inputLastName)
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
      errReferenceData.style.color = fontColorError;
      errReferenceData.textContent = textError;
      e.target.style.border = borderColorError;
    } else {
      errReferenceData.style.color = fontColorValid;
      errReferenceData.innerHTML = iconValid;
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

function eventInputsBirthdate(
  typeEvent, // Type of event (input, focusin or focusout) - string
  styleBorderElse // Style of border to apply
) {
  inputBirthdate.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // valueAsDate collects date registered by user on <input> Birthdate on format equals to Date.now()
    // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
    let dataBirthdate = e.target.valueAsDate;

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
      !e.target.value.match(regexBirthdate)
    ) {
      errorDataBirthdate.style.color = fontColorError;
      errorDataBirthdate.textContent = textErrorBirthdate;
      inputBirthdate.style.border = borderColorError;
    } else {
      errorDataBirthdate.style.color = fontColorValid;
      errorDataBirthdate.innerHTML = iconValid;
      inputBirthdate.style.border = styleBorderElse;
    }
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT RADIO (on events input/focusin/focusout)
//---------------------------------------------------------------------------
// Function for validation LOCALISATION contest on event click

function eventInputLocalisation() {
  inputRadio.forEach((radio) =>
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
        errorDataLocalisation.style.color = fontColorError;
        errorDataLocalisation.textContent = textErrorLocalisation;
      } else {
        errorDataLocalisation.style.color = fontColorValid;
        errorDataLocalisation.innerHTML = iconValid;
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
      errorDataConditions.style.color = fontColorError;
      errorDataConditions.textContent = textErrorConditions;
      return false;
    } else {
      errorDataConditions.style.color = fontColorValid;
      errorDataConditions.innerHTML = iconValid;
      return true;
    }
  });
}

//------------------------------- CALL FUNCTIONS ON EVENTS INPUT/FOCUSIN/FOCUSOUT -------------------------------- //
// ON INPUT : when user write in an input, he'll be notified when content is valid or not
// ON FOCUSIN : Even when user hasn't write anything, he'll be notified of what he has to write
// ON FOCUSOUT : When user quit focus, he'll be notified if his content is valid or not

//---------------------------------------------------------------------------
// INPUT FIRSTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for FIRSTNAME on event "INPUT"
eventInputs(
  inputFirstName,
  "input",
  2,
  30,
  regexNames,
  errorDataFirstName,
  textErrorNames,
  borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSIN"
eventInputs(
  inputFirstName,
  "focusin",
  2,
  30,
  regexNames,
  errorDataFirstName,
  textErrorNames,
  borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSOUT"
eventInputs(
  inputFirstName,
  "focusout",
  2,
  30,
  regexNames,
  errorDataFirstName,
  textErrorNames,
  borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LASTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for LASTNAME on event "INPUT"
eventInputs(
  inputLastName,
  "input",
  2,
  30,
  regexNames,
  errorDataLastName,
  textErrorNames,
  borderColorValid
);
// Launch function for LASTNAME on event "FOCUSIN"
eventInputs(
  inputLastName,
  "focusin",
  2,
  30,
  regexNames,
  errorDataLastName,
  textErrorNames,
  borderColorValid
);
// Launch function for LASTNAME on event "FOCUSOUT"
eventInputs(
  inputLastName,
  "focusout",
  2,
  30,
  regexNames,
  errorDataLastName,
  textErrorNames,
  borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT EMAIL FOCUSING
//---------------------------------------------------------------------------
// Launch function for EMAIL on event "INPUT"
eventInputs(
  inputEmail,
  "input",
  6,
  40,
  regexEmail,
  errorDataEmail,
  textErrorEmail,
  borderColorValid
);
// Launch function for EMAIL on event "FOCUSIN"
eventInputs(
  inputEmail,
  "focusin",
  6,
  40,
  regexEmail,
  errorDataEmail,
  textErrorEmail,
  borderColorValid
);
// Launch function for EMAIL on event "FOCUSOUT"
eventInputs(
  inputEmail,
  "focusout",
  6,
  40,
  regexEmail,
  errorDataEmail,
  textErrorEmail,
  borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT BIRTHDATE FOCUSING
//---------------------------------------------------------------------------
// Launch function for BIRTHDATE on event "INPUT"
eventInputsBirthdate("input", borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSIN"
eventInputsBirthdate("focusin", borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSOUT"
eventInputsBirthdate("focusout", borderColorInitial);

//---------------------------------------------------------------------------
// INPUT NUMBER FOCUSING
//---------------------------------------------------------------------------
// Launch function for QUANTITY CONTEST on event "INPUT"
eventInputs(
  inputQuantityContest,
  "input",
  1,
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  textErrorQuantity,
  borderColorValid
);
// Launch function for QUANTITY CONTEST on event "FOCUSIN"
eventInputs(
  inputQuantityContest,
  "focusin",
  1,
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  textErrorQuantity,
  borderColorValid
);
// Launch function for QUANTITY CONTEST on event "FOCUSOUT"
eventInputs(
  inputQuantityContest,
  "focusout",
  1,
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  textErrorQuantity,
  borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LOCALISATION CONTEST CLICK
//---------------------------------------------------------------------------

eventInputLocalisation();

//---------------------------------------------------------------------------
// INPUT CONDITIONS CLICK
//---------------------------------------------------------------------------

eventInputConditions();
