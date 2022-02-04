// -------------------------------------------------------------------------- //
// ------------- VALIDATIONS INPUTS ON EVENTS INPUT/FOCUS ------------------- //
// -------------------------------------------------------------------------- //
// This javascript file handles validations events when the user completes each
// input without having clicked the "submit" button yet

// ----------------------------- REGEX --------------------------- //

const regexNames =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,/.\s-]{2,50}$/g;
const regexEmail = /^([\w]{1,}[\@][a-z]{1,}[\.][a-z]{2,5})$/;
const regexBirthdate =
  /^(19[0-9][0-9]|20[0-1][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexQuantityContest = /^([0-9]|[0-9][0-9])$/;

// ------------------- DECLARATION FUNCTIONS --------------------- //

//-------------------------------------
// FUNCTION FOR INPUTS TEXT/EMAIL/NUMBER
//-------------------------------------
// Function for validations inputs FIRSTNAME/LASTNAME/EMAIL/QUANTITY CONTEST
// on events "input", "focusin" and "focusout"

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

//-------------------------------------
// FUNCTION FOR INPUT BIRTHDATE
//-------------------------------------
// Function for validation BIRTHDATE on event input & focus
// valid/invalid input by calculating age of user in terms of today's date
// Age minimum required at the time of registration : 12 years old

// Variables to collect current date (day, month and year)
today = new Date();
let dayToday = today.getDate();
let monthToday = today.getMonth();
let yearToday = today.getFullYear();

function eventInputsBirthdate(
  inputReferenceNodelist, // Variable name for <input> in the Nodelist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  regex, // Regex
  errReferenceData, // Variable name for <div class="error-data"> in the Nodelist error-data
  styleBorderElse // Style of border to apply
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // valueAsDate collects date registered by user on <input> Birthdate on format equals to Date.now()
    // This allows to use getFullYear(), getMonth() and getDate() to compare values with current date values
    let dataBirthdate = e.target.valueAsDate;

    if (dataBirthdate == null) {
      // Condition when user hasn't filled any values yet (valueAsDate is null)
      errReferenceData.style.color = fontColorError;
      errReferenceData.textContent = textErrorBirthdate;
      e.target.style.border = borderColorError;
    } else if (
      // Condition when user have 12 years old in the current year
      (dataBirthdate.getFullYear() === yearToday - 12 &&
        dataBirthdate.getMonth() > monthToday) |
      (dataBirthdate.getFullYear() === yearToday - 12 &&
        dataBirthdate.getMonth() === monthToday &&
        dataBirthdate.getDate() > dayToday) |
      // Condition when users has 11 year or less and won't have 12 years old on the current year
      (dataBirthdate.getFullYear() > yearToday - 12) |
      !e.target.value.match(regex)
    ) {
      errReferenceData.style.color = fontColorError;
      errReferenceData.textContent = textErrorBirthdate;
      e.target.style.border = borderColorError;
    } else {
      errReferenceData.style.color = fontColorValid;
      errReferenceData.innerHTML = iconValid;
      e.target.style.border = styleBorderElse;
    }
  });
}

//-------------------------------------
// FUNCTION FOR INPUT RADIO
//-------------------------------------
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

//-------------------------------------
// FUNCTION FOR INPUT CHECKBOX
//-------------------------------------
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

// ----------------------- CALL FUNCTIONS ------------------------- //

//--------------------------
// INPUT FIRSTNAME FOCUSING
//--------------------------
// Launch function for FIRSTNAME on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
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
// (Even when user hasn't write anything, a notification inform him what he has to write)
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
// (When user quit focus, he will be notified if his content is valid or not)
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

//--------------------------
// INPUT LASTNAME FOCUSING
//--------------------------
// Launch function for LASTNAME on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
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
// (Even when user hasn't write anything, a notification inform him what he has to write)
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
// (When user quit focus, he will be notified if his content is valid or not)
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

//--------------------------
// INPUT EMAIL FOCUSING
//--------------------------
// Launch function for EMAIL on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
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
// (Even when user hasn't write anything, a notification inform him what he has to write)
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
// (When user quit focus, he will be notified if his content is valid or not)
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

//--------------------------
// INPUT BIRTHDATE FOCUSING
//--------------------------
// Launch function for BIRTHDATE on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
eventInputsBirthdate(
  inputBirthdate,
  "input",
  regexBirthdate,
  errorDataBirthdate,
  borderColorValid
);
// Launch function for BIRTHDATE on event "FOCUSIN"
// (Even when user hasn't write anything, a notification inform him what he has to write)
eventInputsBirthdate(
  inputBirthdate,
  "focusin",
  regexBirthdate,
  errorDataBirthdate,
  borderColorValid
);
// Launch function for BIRTHDATE on event "FOCUSOUT"
// (When user quit focus, he will be notified if his content is valid or not)
eventInputsBirthdate(
  inputBirthdate,
  "focusout",
  regexBirthdate,
  errorDataBirthdate,
  borderColorInitial
);

//--------------------------
// INPUT NUMBER FOCUSING
//--------------------------
// Launch function for QUANTITY CONTEST on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
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
// (Even when user hasn't write anything, a notification inform him what he has to write)
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
// (When user quit focus, he will be notified if his content is valid or not)
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

//-----------------------------------
// INPUT LOCALISATION CONTEST CLICK
//-----------------------------------

eventInputLocalisation();

//--------------------------
// INPUT CONDITIONS CLICK
//--------------------------

eventInputConditions();
