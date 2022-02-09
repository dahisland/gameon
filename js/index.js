import * as vars from "./modules/variables.js";
import { navbar, launchModal, closeModal } from "./modules/layout.js";
import * as valid from "./modules/validation.js";
import * as events from "./modules/events-input.js";

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------- LAYOUT --------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// -------------------- This javascript part calls functions to interact with HTML/CSS layout -------------------- //

// ---------------------------------------------- RESPONSIVE TOPNAV ---------------------------------------------- //
// ------------------------------- Event to add a class for responsive design topnav ----------------------------- //

vars.navIcon.addEventListener("click", () => {
  if (vars.topNav.className === "topnav") {
    vars.topNav.className += " responsive";
  } else {
    vars.topNav.className = "topnav";
  }
});

// --------------------------------------- FORM-DATA CONDITIONS/NEWSLETTER --------------------------------------- //
// -------------- Event to add a class for Nodelist formData containing "conditions d'utilisations" -------------- //

vars.formDataConditions.classList.add("margin-conditions");

// -------------------------------------------- NAVIGATION FOR TOPNAV -------------------------------------------- //
// ------------------------ Events for navigation by clicking on elements <a> in the navbar ---------------------- //

navbar(vars.spanDetails, vars.spanEvents, vars.spanPropos, vars.spanContact);
navbar(vars.spanContact, vars.spanDetails, vars.spanEvents, vars.spanPropos);
navbar(vars.spanPropos, vars.spanDetails, vars.spanEvents, vars.spanContact);
navbar(vars.spanEvents, vars.spanPropos, vars.spanDetails, vars.spanContact);

// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Function called to launch modal form by clicking on <button class="modal-btn">

// Calls function lauchModal with event "click" on <button class="modal-btn">
vars.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Function called to close modal by clicking on <span class="close">

// Calls function closeModal with event "click" on <span class="close">
vars.spanClose.forEach((span) => span.addEventListener("click", closeModal));

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- VALIDATION INPUTS IN FORM ON EVENTS INPUT/FOCUS ------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- This javascript part handles validation events on input while user is filling it -------------- //

//------------------------------- CALL FUNCTIONS FOR EVENTS INPUT/FOCUSIN/FOCUSOUT -------------------------------- //
// ON INPUT : when user write in an input, he'll be notified when content is valid or not
// ON FOCUSIN : Even when user hasn't write anything, he'll be notified of what he has to write
// ON FOCUSOUT : When user quit focus, he'll be notified if his content is valid or not

//---------------------------------------------------------------------------
// INPUT FIRSTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for FIRSTNAME on event "INPUT"
events.eventInputNames(
  vars.inputFirstName,
  vars.errorDataFirstName,
  "input",
  vars.borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSIN"
events.eventInputNames(
  vars.inputFirstName,
  vars.errorDataFirstName,
  "focusin",
  vars.borderColorValid
);
// Launch function for FIRSTNAME on event "FOCUSOUT"
events.eventInputNames(
  vars.inputFirstName,
  vars.errorDataFirstName,
  "focusout",
  vars.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LASTNAME FOCUSING
//---------------------------------------------------------------------------
// Launch function for LASTNAME on event "INPUT"
events.eventInputNames(
  vars.inputLastName,
  vars.errorDataLastName,
  "input",
  vars.borderColorValid
);
// Launch function for LASTNAME on event "FOCUSIN"
events.eventInputNames(
  vars.inputLastName,
  vars.errorDataLastName,
  "focusin",
  vars.borderColorValid
);
// Launch function for LASTNAME on event "FOCUSOUT"
events.eventInputNames(
  vars.inputLastName,
  vars.errorDataLastName,
  "focusout",
  vars.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT EMAIL FOCUSING
//---------------------------------------------------------------------------
// Launch function for EMAIL on event "INPUT"
events.eventInputEmail(vars.inputEmail, "input", vars.borderColorValid);
// Launch function for EMAIL on event "FOCUSIN"
events.eventInputEmail(vars.inputEmail, "focusin", vars.borderColorValid);
// Launch function for EMAIL on event "FOCUSOUT"
events.eventInputEmail(vars.inputEmail, "focusout", vars.borderColorInitial);

//---------------------------------------------------------------------------
// INPUT BIRTHDATE FOCUSING
//---------------------------------------------------------------------------
// Launch function for BIRTHDATE on event "INPUT"
events.eventInputBirthdate("input", vars.borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSIN"
events.eventInputBirthdate("focusin", vars.borderColorValid);
// Launch function for BIRTHDATE on event "FOCUSOUT"
events.eventInputBirthdate("focusout", vars.borderColorInitial);

//---------------------------------------------------------------------------
// INPUT NUMBER FOCUSING
//---------------------------------------------------------------------------
// Launch function for NUMBERS on event "INPUT"
events.eventInputQuantity(vars.inputNumbers, "input", vars.borderColorValid);
// Launch function for NUMBERS on event "FOCUSIN"
events.eventInputQuantity(vars.inputNumbers, "focusin", vars.borderColorValid);
// Launch function for NUMBERS on event "FOCUSOUT"
events.eventInputQuantity(
  vars.inputNumbers,
  "focusout",
  vars.borderColorInitial
);

//---------------------------------------------------------------------------
// INPUT LOCALISATION CONTEST ON CLICK
//---------------------------------------------------------------------------
events.eventInputLocalise();

//---------------------------------------------------------------------------
// INPUT CONDITIONS ON CLICK
//---------------------------------------------------------------------------
events.eventInputConditions();

// --------------------------------------------------------------------------------------------------------------- //
// ---------------------------------- VALIDATION INPUTS IN FORM ON EVENT SUBMIT ---------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ----------- This javascript part handles validation form when the user click on the "submit" button ----------- //

//---------------------------------------- CALL FUNCTIONS ON EVENT SUBMIT ---------------------------------------- //

vars.form.addEventListener("submit", (event) => {
  // Prevent default reloading page on submit
  event.preventDefault();
  // Call function for Input FIRST NAME
  valid.validateInputNames(
    vars.inputFirstName,
    vars.errorDataFirstName,
    vars.borderColorInitial
  );
  // Call function for Input LAST NAME
  valid.validateInputNames(
    vars.inputLastName,
    vars.errorDataLastName,
    vars.borderColorInitial
  );
  // Call function for Input EMAIL
  valid.validateInputEmail(vars.borderColorInitial);
  // Call function for Input BIRTHDATE
  valid.validateInputBirthdate(vars.borderColorInitial);
  // Call function for Input NUMBERS
  valid.validateInputQuantity(vars.borderColorInitial);
  // Call function for Input LOCALISATION CONTEST
  valid.validateLocalise();
  // Call function for Input ACCEPT CONDITIONS
  valid.validateConditions();

  // CONDITIONS FOR SUBMIT (All functions Inputs have to return true)
  if (
    // If function for Input FIRST NAME return false
    !valid.validateInputNames(
      vars.inputFirstName,
      vars.errorDataFirstName,
      vars.borderColorInitial
    ) |
    // If function for Input LAST NAME return false
    !valid.validateInputNames(
      vars.inputLastName,
      vars.errorDataLastName,
      vars.borderColorInitial
    ) |
    // If function for Input EMAIL return false
    !valid.validateInputEmail(vars.borderColorInitial) |
    // If function for Input BIRTHDATE return false
    !valid.validateInputBirthdate(vars.borderColorInitial) |
    // If function for Input NUMBERS return false
    !valid.validateInputQuantity(vars.borderColorInitial) |
    // If function for Input LOCALISATION return false
    !valid.validateLocalise() |
    // If function for Input CONDITIONS return false
    !valid.validateConditions()
  ) {
    return false;
  } else {
    // Form is valid => form is hidden
    vars.form.style.display = "none";
    // Form is valid => a "message thanks" is displayed
    vars.textThanks.style.display = "block";
    vars.textThanks.innerHTML = vars.messageThanks;
    // Form is valid => a close button is displayed to close modal
    const buttonClose = document.querySelectorAll(".btn-close");
    // The close button calls function closeModal on click
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
      })
    );
    return true;
  }
});
