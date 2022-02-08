import * as variable from "./modules/variables.js";
import { navbar, launchModal, closeModal } from "./modules/layout.js";
import {
  eventInputs,
  eventInputBirthdate,
  eventInputLocalisation,
  eventInputConditions,
} from "./modules/events-input.js";
import {
  validateInputs,
  validateInputBirthdate,
  validateLocalisation,
  validateConditions,
} from "./modules/validation.js";

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------- LAYOUT --------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// -------------------- This javascript part calls functions to interact with HTML/CSS layout -------------------- //

// ---------------------------------------------- RESPONSIVE TOPNAV ---------------------------------------------- //
// ------------------------------- Event to add a class for responsive design topnav ----------------------------- //

variable.navIcon.addEventListener("click", () => {
  if (variable.topNav.className === "topnav") {
    variable.topNav.className += " responsive";
  } else {
    variable.topNav.className = "topnav";
  }
});

// --------------------------------------- FORM-DATA CONDITIONS/NEWSLETTER --------------------------------------- //
// -------------- Event to add a class for Nodelist formData containing "conditions d'utilisations" -------------- //

variable.formDataConditions.classList.add("margin-conditions");

// -------------------------------------------- NAVIGATION FOR TOPNAV -------------------------------------------- //
// ------------------------ Events for navigation by clicking on elements <a> in the navbar ---------------------- //

navbar(
  variable.spanDetails,
  variable.spanEvents,
  variable.spanPropos,
  variable.spanContact
);
navbar(
  variable.spanContact,
  variable.spanDetails,
  variable.spanEvents,
  variable.spanPropos
);
navbar(
  variable.spanPropos,
  variable.spanDetails,
  variable.spanEvents,
  variable.spanContact
);
navbar(
  variable.spanEvents,
  variable.spanPropos,
  variable.spanDetails,
  variable.spanContact
);

// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Function called to launch modal form by clicking on <button class="modal-btn">

// Calls function lauchModal with event "click" on <button class="modal-btn">
variable.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Function called to close modal by clicking on <span class="close">

// Calls function closeModal with event "click" on <span class="close">
variable.spanClose.forEach((span) =>
  span.addEventListener("click", closeModal)
);

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- VALIDATION INPUTS IN FORM ON EVENTS INPUT/FOCUS ------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- This javascript part handles validation events on input while user is filling it -------------- //

//------------------------------- CALL FUNCTIONS ON EVENTS INPUT/FOCUSIN/FOCUSOUT -------------------------------- //
// ON INPUT : when user write in an input, he'll be notified when content is valid or not
// ON FOCUSIN : Even when user hasn't write anything, he'll be notified of what he has to write
// ON FOCUSOUT : When user quit focus, he'll be notified if his content is valid or not

//---------------------------------------------------------------------------
// INPUT FIRSTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for FIRSTNAME on event "INPUT"
eventInputs(
  variable.inputFirstName,
  "input",
  2,
  30,
  variable.regexNames,
  variable.errorDataFirstName,
  variable.textErrorNames,
  variable.borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSIN"
eventInputs(
  variable.inputFirstName,
  "focusin",
  2,
  30,
  variable.regexNames,
  variable.errorDataFirstName,
  variable.textErrorNames,
  variable.borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSOUT"
eventInputs(
  variable.inputFirstName,
  "focusout",
  2,
  30,
  variable.regexNames,
  variable.errorDataFirstName,
  variable.textErrorNames,
  variable.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LASTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for LASTNAME on event "INPUT"
eventInputs(
  variable.inputLastName,
  "input",
  2,
  30,
  variable.regexNames,
  variable.errorDataLastName,
  variable.textErrorNames,
  variable.borderColorValid
);
// Launch function for LASTNAME on event "FOCUSIN"
eventInputs(
  variable.inputLastName,
  "focusin",
  2,
  30,
  variable.regexNames,
  variable.errorDataLastName,
  variable.textErrorNames,
  variable.borderColorValid
);
// Launch function for LASTNAME on event "FOCUSOUT"
eventInputs(
  variable.inputLastName,
  "focusout",
  2,
  30,
  variable.regexNames,
  variable.errorDataLastName,
  variable.textErrorNames,
  variable.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT EMAIL FOCUSING
//---------------------------------------------------------------------------
// Launch function for EMAIL on event "INPUT"
eventInputs(
  variable.inputEmail,
  "input",
  6,
  40,
  variable.regexEmail,
  variable.errorDataEmail,
  variable.textErrorEmail,
  variable.borderColorValid
);
// Launch function for EMAIL on event "FOCUSIN"
eventInputs(
  variable.inputEmail,
  "focusin",
  6,
  40,
  variable.regexEmail,
  variable.errorDataEmail,
  variable.textErrorEmail,
  variable.borderColorValid
);
// Launch function for EMAIL on event "FOCUSOUT"
eventInputs(
  variable.inputEmail,
  "focusout",
  6,
  40,
  variable.regexEmail,
  variable.errorDataEmail,
  variable.textErrorEmail,
  variable.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT BIRTHDATE FOCUSING
//---------------------------------------------------------------------------
// Launch function for BIRTHDATE on event "INPUT"
eventInputBirthdate("input", variable.borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSIN"
eventInputBirthdate("focusin", variable.borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSOUT"
eventInputBirthdate("focusout", variable.borderColorInitial);

//---------------------------------------------------------------------------
// INPUT NUMBER FOCUSING
//---------------------------------------------------------------------------
// Launch function for QUANTITY CONTEST on event "INPUT"
eventInputs(
  variable.inputQuantityContest,
  "input",
  1,
  2,
  variable.regexQuantityContest,
  variable.errorDataQuantityContest,
  variable.textErrorQuantity,
  variable.borderColorValid
);
// Launch function for QUANTITY CONTEST on event "FOCUSIN"
eventInputs(
  variable.inputQuantityContest,
  "focusin",
  1,
  2,
  variable.regexQuantityContest,
  variable.errorDataQuantityContest,
  variable.textErrorQuantity,
  variable.borderColorValid
);
// Launch function for QUANTITY CONTEST on event "FOCUSOUT"
eventInputs(
  variable.inputQuantityContest,
  "focusout",
  1,
  2,
  variable.regexQuantityContest,
  variable.errorDataQuantityContest,
  variable.textErrorQuantity,
  variable.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LOCALISATION CONTEST CLICK
//---------------------------------------------------------------------------

eventInputLocalisation();

//---------------------------------------------------------------------------
// INPUT CONDITIONS CLICK
//---------------------------------------------------------------------------

eventInputConditions();

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------- VALIDATION INPUTS IN FORM ON EVENT SUBMIT ---------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ----------- This javascript part handles validation form when the user click on the "submit" button ----------- //

//---------------------------------------- CALL FUNCTIONS ON EVENT SUBMIT ---------------------------------------- //

variable.form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default reloading page on submit
  // Call function for Input FIRST NAME
  validateInputs(
    variable.inputFirstName,
    2,
    30,
    variable.regexNames,
    variable.errorDataFirstName,
    variable.textErrorNames
  );
  // Call function for Input LAST NAME
  validateInputs(
    variable.inputLastName,
    2,
    30,
    variable.regexNames,
    variable.errorDataLastName,
    variable.textErrorNames
  );
  // Call function for Input EMAIL
  validateInputs(
    variable.inputEmail,
    6,
    40,
    variable.regexEmail,
    variable.errorDataEmail,
    variable.textErrorEmail
  );
  // Call function for Input BIRTHDATE
  validateInputBirthdate();
  // Call function for Input QUANTITY CONTEST
  validateInputs(
    variable.inputQuantityContest,
    1,
    2,
    variable.regexQuantityContest,
    variable.errorDataQuantityContest,
    variable.textErrorQuantity
  );
  // Call function for Input LOCALISATION CONTEST
  validateLocalisation();
  // Call function for Input ACCEPT CONDITIONS
  validateConditions();

  // CONDITIONS FOR SUBMIT ( All functions Inputs must return true)
  if (
    // If function for Input FIRST NAME return false
    !validateInputs(
      variable.inputFirstName,
      2,
      30,
      variable.regexNames,
      variable.errorDataFirstName,
      variable.textErrorNames
    )
  ) {
    return false;
  } else if (
    // If function for Input LAST NAME return false
    !validateInputs(
      variable.inputLastName,
      2,
      30,
      variable.regexNames,
      variable.errorDataLastName,
      variable.textErrorNames
    )
  ) {
    return false;
  } else if (
    // If function for Input EMAIL return false
    !validateInputs(
      variable.inputEmail,
      6,
      40,
      variable.regexEmail,
      variable.errorDataEmail,
      variable.textErrorEmail
    )
  ) {
    return false;
  } else if (
    // If function for Input BIRTHDATE return false
    !validateInputs(
      variable.inputBirthdate,
      8,
      12,
      variable.regexBirthdate,
      variable.errorDataBirthdate,
      variable.textErrorBirthdate
    )
  ) {
    return false;
  } else if (
    // If function for Input ACCEPT CONDITIONS return false
    !validateInputBirthdate()
  ) {
    return false;
  } else if (
    // If function for Input QUANTITY CONTEST return false
    !validateInputs(
      variable.inputQuantityContest,
      1,
      2,
      variable.regexQuantityContest,
      variable.errorDataQuantityContest,
      variable.textErrorQuantity
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
    variable.form.style.display = "none";
    // Form is valid => a "message thanks" is displayed
    variable.textThanks.style.display = "block";
    variable.textThanks.innerHTML = variable.messageThanks;
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
});
