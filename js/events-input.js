//------------------------------------------------------------- INPUT MESSAGES ON FOCUS
// For the First name input (delete if not used) !!
let firstName = "";

// Function to apply events "input", "focusin" and "focusout" for inputs validations
function eventInputFirstAndLastName(
  inputReferenceNodelist, // Variable name for input in Nodlist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  errReferenceData, // Variable name for div error-data in Nodelist error-data
  styleBorderElse // Style to apply - string
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // display an error message & change border color when the number of caracters isn't correct
    if (e.target.value.length < 2) {
      errReferenceData.textContent =
        "* Veuillez indiquer au moins 2 caractères";
      e.target.style.border = "2.8px solid #ff0000";
    } else {
      errReferenceData.textContent = "";
      e.target.style.border = styleBorderElse;
    }
  });
}

// INPUT FIRSTNAME FOCUSING
// Launch function for FirstName on event "input" (when user write on input, he will be notified when content is valid or not)
eventInputFirstAndLastName(
  inputFirstName,
  "input",
  errorDataFirstName,
  "2.8px solid green"
);
// Launch function for FirstName on event "focusin" (Even when user hasn't write anything, a notification inform him what he has to write)
eventInputFirstAndLastName(
  inputFirstName,
  "focusin",
  errorDataFirstName,
  "2.8px solid green"
);
// Launch function for FirstName on event "focusout" (If user quit focus, he will be notified if his content still isn't valid)
eventInputFirstAndLastName(
  inputFirstName,
  "focusout",
  errorDataFirstName,
  "0.8px solid #ccc"
);

// INPUT LASTNAME FOCUSING
// Launch function for LastName input
eventInputFirstAndLastName(
  inputLastName,
  "input",
  errorDataLastName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputLastName,
  "focusin",
  errorDataLastName,
  "2.8px solid green"
);
eventInputFirstAndLastName(
  inputLastName,
  "focusout",
  errorDataLastName,
  "0.8px solid #ccc"
);
