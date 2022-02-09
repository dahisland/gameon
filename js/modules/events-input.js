import * as vars from "./variables.js";
import * as valid from "./validation.js";

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- VALIDATION INPUTS IN FORM ON EVENTS INPUT/FOCUS ------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- This javascript file handles validation events on input while user is filling it -------------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT FIRSTNAME & LASTNAME (on events input/focusin/focusout)
//---------------------------------------------------------------------------

function eventInputNames(
  inputRefNodelist,
  errRefData,
  eventInput,
  styleBorderElse
) {
  inputRefNodelist.addEventListener(eventInput, () => {
    inputRefNodelist.value = inputRefNodelist.value.replace(/[\s]{2,}/g, " ");
    inputRefNodelist.value = inputRefNodelist.value.replace(/[\-]{2,}/g, "-");
    inputRefNodelist.value = inputRefNodelist.value.replace(/^[\s]/, "");
    valid.validateInputNames(inputRefNodelist, errRefData, styleBorderElse);
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT EMAIL (on events input/focusin/focusout)
//---------------------------------------------------------------------------

function eventInputEmail(inputRefNodelist, eventInput, colorBorder) {
  inputRefNodelist.addEventListener(eventInput, () => {
    inputRefNodelist.value = inputRefNodelist.value.replace(/\s/g, "");
    inputRefNodelist.value = inputRefNodelist.value.replace(/^[\s]/, "");
    valid.validateInputEmail(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT BIRTHDATE (on events input/focusin/focusout)
//---------------------------------------------------------------------------
// valid/invalid input by calculating age of user in terms of current date
// Age minimum required at the time of registration : 12 years old

function eventInputBirthdate(
  typeEvent, // Type of event (input, focusin or focusout) - string
  colorBorder // Style of border to apply
) {
  vars.inputBirthdate.addEventListener(typeEvent, () => {
    valid.validateInputBirthdate(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT NUMBERS (on events input/focusin/focusout)
//---------------------------------------------------------------------------

function eventInputQuantity(inputRefNodelist, eventInput, colorBorder) {
  inputRefNodelist.addEventListener(eventInput, () => {
    inputRefNodelist.value = inputRefNodelist.value.replace(/\s/g, "");
    inputRefNodelist.value = inputRefNodelist.value.replace(/^[\s]/, "");
    valid.validateInputQuantity(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT RADIO (on event "click")
//---------------------------------------------------------------------------

function eventInputLocalise() {
  vars.inputRadio.forEach((radio) =>
    radio.addEventListener("click", () => {
      valid.validateLocalise();
    })
  );
}

//---------------------------------------------------------------------------
// FUNCTION FOR INPUT CHECKBOX (on event "click")
//---------------------------------------------------------------------------

function eventInputConditions() {
  checkbox1.addEventListener("click", () => {
    valid.validateConditions();
  });
}

export {
  eventInputNames,
  eventInputEmail,
  eventInputQuantity,
  eventInputBirthdate,
  eventInputLocalise,
  eventInputConditions,
};
