//------------------------------------------------------------- INPUT MESSAGES ON FOCUS
// Variables for regex
const regexNames =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,/.\s- ]{2,50}$/;
const regexEmail = /^\w*\@\w*\.\w{2,5}$/;
const regexBirthdate =
  /^(19[0-9][0-9]|20[0-1][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexQuantityContest = /^(\d|[0-9][0-9])$/;

// Function to apply events "input", "focusin" and "focusout" for inputs First & Last Names
function eventInputs(
  inputReferenceNodelist, // Variable name for input in Nodlist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  lengthValue, // Value of minimul length required
  regex, // Regex
  errReferenceData, // Variable name for div error-data in Nodelist error-data
  textError, // Message displayed when error - string
  styleBorderElse // Style to apply - string
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // display an error message & change border color when the number of caracters isn't correct
    if ((e.target.value.length < lengthValue) | !e.target.value.match(regex)) {
      errReferenceData.textContent = textError;
      errReferenceData.style.color = "#ff0000";
      e.target.style.border = "2.8px solid #ff0000";
    } else {
      errReferenceData.innerHTML = '<i class="fa fa-check"></i>';
      errReferenceData.style.color = "green";
      e.target.style.border = styleBorderElse;
    }
  });
}

// INPUT FIRSTNAME FOCUSING
// Launch function for FirstName on event "input" (when user write on input, he will be notified when content is valid or not)
eventInputs(
  inputFirstName,
  "input",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FirstName on event "focusin" (Even when user hasn't write anything, a notification inform him what he has to write)
eventInputs(
  inputFirstName,
  "focusin",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FirstName on event "focusout" (If user quit focus, he will be notified if his content still isn't valid)
eventInputs(
  inputFirstName,
  "focusout",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "0.8px solid #ccc"
);

// INPUT LASTNAME FOCUSING
// Launch function for LastName input
eventInputs(
  inputLastName,
  "input",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
eventInputs(
  inputLastName,
  "focusin",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
eventInputs(
  inputLastName,
  "focusout",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "0.8px solid #ccc"
);

// INPUT EMAIL FOCUSING
// Launch function for Email input
eventInputs(
  inputEmail,
  "input",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "2.8px solid green"
);
eventInputs(
  inputEmail,
  "focusin",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "2.8px solid green"
);
eventInputs(
  inputEmail,
  "focusout",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "0.8px solid #ccc"
);

// INPUT BIRTHDATE FOCUSING
// Launch function for birthdate input
eventInputs(
  inputBirthdate,
  "input",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "2.8px solid green"
);
eventInputs(
  inputBirthdate,
  "focusin",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "2.8px solid green"
);
eventInputs(
  inputBirthdate,
  "focusout",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "0.8px solid #ccc"
);

// INPUT NUMBER FOCUSING
// Launch function for Quantity Contest input
eventInputs(
  inputQuantityContest,
  "input",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 1 et 99",
  "2.8px solid green"
);
eventInputs(
  inputQuantityContest,
  "focusin",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 1 et 99",
  "2.8px solid green"
);
eventInputs(
  inputQuantityContest,
  "focusout",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 1 et 99",
  "0.8px solid #ccc"
);
