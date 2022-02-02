//------------------------------------------------------------- INPUT MESSAGES ON FOCUS
// Variables for REGEX
const regexNames =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,/.\s-]{2,50}$/g;
const regexEmail = /^\w{1,}\@\w{1,}\.\w{2,5}$/;
const regexBirthdate =
  /^(19[0-9][0-9]|20[0-1][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexQuantityContest = /^([0-9]|[0-9][0-9])$/;

// Function to apply events "input", "focusin" and "focusout" for inputs FIRSTNAME & LASTNAME
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
    // Condition to reduce whitspaces for inputs FIRST NAME & LASTNAME or supprim for input EMAIL
    if (
      (inputReferenceNodelist == inputEmail) |
      (inputReferenceNodelist == inputQuantityContest)
    ) {
      e.target.value = e.target.value.replace(/\s/g, "");
    } else if (
      (inputReferenceNodelist == inputFirstName) |
      (inputReferenceNodelist == inputLastName)
    ) {
      e.target.value = e.target.value.replace(/[\s]{2,}/g, " ");
      e.target.value = e.target.value.replace(/^[\s]/, "");
    }
    // display an error message & change border color when the number of caracters isn't correct
    if ((e.target.value.length < lengthValue) | !e.target.value.match(regex)) {
      errReferenceData.style.color = "#ff0000";
      errReferenceData.textContent = textError;
      e.target.style.border = "2.8px solid #ff0000";
    } else {
      errReferenceData.style.color = "green";
      errReferenceData.innerHTML = '<i class="fa fa-check"></i>';
      e.target.style.border = styleBorderElse;
    }
  });
}

//--------------------------
// INPUT FIRSTNAME FOCUSING
//--------------------------
// Launch function for FIRSTNAME on event "INPUT"
// (when user write on input, he will be notified when content is valid or not)
eventInputs(
  inputFirstName,
  "input",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FIRSTNAME on event "FOCUSIN"
//(Even when user hasn't write anything, a notification inform him what he has to write)
eventInputs(
  inputFirstName,
  "focusin",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FIRSTNAME on event "FOCUSOUT"
// (If user quit focus, he will be notified if his content still isn't valid)
eventInputs(
  inputFirstName,
  "focusout",
  2,
  regexNames,
  errorDataFirstName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "0.8px solid #ccc"
);

//--------------------------
// INPUT LASTNAME FOCUSING
//--------------------------
// Launch function for LASTNAME on event "INPUT"
eventInputs(
  inputLastName,
  "input",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for LASTNAME on event "FOCUSIN"
eventInputs(
  inputLastName,
  "focusin",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for LASTNAME on event "FOCUSOUT"
eventInputs(
  inputLastName,
  "focusout",
  2,
  regexNames,
  errorDataLastName,
  "* 2 caractères minimum, sans chiffre ni caractères spéciaux",
  "0.8px solid #ccc"
);

//--------------------------
// INPUT EMAIL FOCUSING
//--------------------------
// Launch function for EMAIL on event "INPUT"
eventInputs(
  inputEmail,
  "input",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "2.8px solid green"
);
// Launch function for EMAIL on event "FOCUSIN"
eventInputs(
  inputEmail,
  "focusin",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "2.8px solid green"
);
// Launch function for EMAIL on event "FOCUSOUT"
eventInputs(
  inputEmail,
  "focusout",
  6,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide",
  "0.8px solid #ccc"
);

//--------------------------
// INPUT BIRTHDATE FOCUSING
//--------------------------
// Launch function for BIRTHDATE on event "INPUT"
eventInputs(
  inputBirthdate,
  "input",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSIN"
eventInputs(
  inputBirthdate,
  "focusin",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSOUT"
eventInputs(
  inputBirthdate,
  "focusout",
  8,
  regexBirthdate,
  errorDataBirthdate,
  "* Veuillez entrer une date entre le 01/01/1900 et le 31/12/2019",
  "0.8px solid #ccc"
);

//--------------------------
// INPUT NUMBER FOCUSING
//--------------------------
// Launch function for QUANTITY CONTEST on event "INPUT"
eventInputs(
  inputQuantityContest,
  "input",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSIN"
eventInputs(
  inputQuantityContest,
  "focusin",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSOUT"
eventInputs(
  inputQuantityContest,
  "focusout",
  1,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "0.8px solid #ccc"
);
