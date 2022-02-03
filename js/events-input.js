// This javascript file handles validations events when the user completes each
// input without having clicked the "submit" button yet

// -------------------------------------------------------------------------- //
// ---------------------------------- REGEX --------------------------------- //
// -------------------------------------------------------------------------- //

const regexNames =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,/.\s-]{2,50}$/g;
const regexEmail = /^([\w]{1,}[\@][a-z]{1,}[\.][a-z]{2,5})$/;
const regexBirthdate =
  /^(19[0-9][0-9]|20[0-1][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexQuantityContest = /^([0-9]|[0-9][0-9])$/;

// -------------------------------------------------------------------------- //
// ----------------------- DECLARATION FUNCTIONS ---------------------------- //
// -------------------------------------------------------------------------- //

// Function for validations inputs FIRSTNAME/LASTNAME/EMAIL/QUANTITY CONTEST
// on events "input", "focusin" and "focusout"

function eventInputs(
  inputReferenceNodelist, // Variable name for input in Nodlist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  lengthValue, // Value of minimul length required
  lengthValue2, // Value of minimul length required
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
    if (
      (e.target.value.length < lengthValue) |
      (e.target.value.length > lengthValue2) |
      !e.target.value.match(regex)
    ) {
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
//-------------------------------------------------------------------------
// Function for validation BIRTHDATE on event input & focus
// valid/invalid input by calculating age of user in terms of today's date
// Age minimum required at the time of registration : 12 years old

// Variables to collect today's date (day, month and year)
today = new Date();
let dayToday = today.getDate();
let monthToday = today.getMonth();
let yearToday = today.getFullYear();

function eventInputsBirthdate(
  inputReferenceNodelist, // Variable name for input in Nodlist input
  typeEvent, // Type of event (input, focusin or focusout) - string
  regex, // Regex
  errReferenceData, // Variable name for div error-data in Nodelist error-data
  styleBorderElse // Style to apply - string
) {
  inputReferenceNodelist.addEventListener(typeEvent, (e) => {
    e.preventDefault();
    // valueAsDate collect dat registered on input Birthdate on format equals to Date.now()
    // This allows to use getFullYear(), getMonth() and getDate() to compare values with today's values
    let dataBirthdate = e.target.valueAsDate;

    if (dataBirthdate == null) {
      // When user hasn't filled any values yet (valueAsDate is null)
      errReferenceData.style.color = "#ff0000";
      errReferenceData.textContent =
        "* Vous devez avoir au moins 12 ans au moment de l'inscription";
      e.target.style.border = "2.8px solid #ff0000";
    } else if (
      // when user's will have 12 years old on the year
      (dataBirthdate.getFullYear() === yearToday - 12 &&
        dataBirthdate.getMonth() > monthToday) |
      (dataBirthdate.getFullYear() === yearToday - 12 &&
        dataBirthdate.getMonth() === monthToday &&
        dataBirthdate.getDate() > dayToday) |
      // When users has 11 year or less and won't have 12 years old on the year
      (dataBirthdate.getFullYear() > yearToday - 12) |
      !e.target.value.match(regex)
    ) {
      errReferenceData.style.color = "#ff0000";
      errReferenceData.textContent =
        "* Vous devez avoir au moins 12 ans au moment de l'inscription";
      e.target.style.border = "2.8px solid #ff0000";
    } else {
      errReferenceData.style.color = "green";
      errReferenceData.innerHTML = '<i class="fa fa-check"></i>';
      e.target.style.border = styleBorderElse;
    }
  });
}
//----------------------------------------------------------------------------
// Function for validation LOCALISATION contest on event click

function eventInputLocalisation() {
  inputRadio.forEach((radio) =>
    radio.addEventListener("click", () => {
      if (
        location1.checked == false &&
        location2.checked == false &&
        location3.checked == false &&
        location4.checked == false &&
        location5.checked == false &&
        location6.checked == false
      ) {
        errorDataLocalisation.style.color = "#ff0000";
        errorDataLocalisation.textContent =
          "* Veuillez cocher une localisation";
      } else {
        errorDataLocalisation.style.color = "green";
        errorDataLocalisation.innerHTML = '<i class="fa fa-check"></i>';
      }
    })
  );
}

//-------------------------------------------------------------------------
// Function for validation CONDITIONS on event click

function eventInputConditions() {
  checkbox1.addEventListener("click", () => {
    if (checkbox1.checked == false) {
      errorDataConditions.style.color = "#ff0000";
      errorDataConditions.textContent =
        "* Veuillez accepter les conditions d'utilisation";
      return false;
    } else {
      errorDataConditions.style.color = "green";
      errorDataConditions.innerHTML = '<i class="fa fa-check"></i>';
      return true;
    }
  });
}

// -------------------------------------------------------------------------- //
// ------------------------- CALL FUNCTIONS --------------------------------- //
// -------------------------------------------------------------------------- //

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
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FIRSTNAME on event "FOCUSIN"
//(Even when user hasn't write anything, a notification inform him what he has to write)
eventInputs(
  inputFirstName,
  "focusin",
  2,
  30,
  regexNames,
  errorDataFirstName,
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for FIRSTNAME on event "FOCUSOUT"
// (If user quit focus, he will be notified if his content still isn't valid)
eventInputs(
  inputFirstName,
  "focusout",
  2,
  30,
  regexNames,
  errorDataFirstName,
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
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
  30,
  regexNames,
  errorDataLastName,
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for LASTNAME on event "FOCUSIN"
eventInputs(
  inputLastName,
  "focusin",
  2,
  30,
  regexNames,
  errorDataLastName,
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
  "2.8px solid green"
);
// Launch function for LASTNAME on event "FOCUSOUT"
eventInputs(
  inputLastName,
  "focusout",
  2,
  30,
  regexNames,
  errorDataLastName,
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux",
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
  40,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide (max 40 caractères)",
  "2.8px solid green"
);
// Launch function for EMAIL on event "FOCUSIN"
eventInputs(
  inputEmail,
  "focusin",
  6,
  40,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide (max 40 caractères)",
  "2.8px solid green"
);
// Launch function for EMAIL on event "FOCUSOUT"
eventInputs(
  inputEmail,
  "focusout",
  6,
  40,
  regexEmail,
  errorDataEmail,
  "* Veuillez entrer une adresse mail valide (max 40 caractères)",
  "0.8px solid #ccc"
);

//--------------------------
// INPUT BIRTHDATE FOCUSING
//--------------------------
// Launch function for BIRTHDATE on event "INPUT"
eventInputsBirthdate(
  inputBirthdate,
  "input",
  regexBirthdate,
  errorDataBirthdate,
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSIN"
eventInputsBirthdate(
  inputBirthdate,
  "focusin",
  regexBirthdate,
  errorDataBirthdate,
  "2.8px solid green"
);
// Launch function for BIRTHDATE on event "FOCUSOUT"
eventInputsBirthdate(
  inputBirthdate,
  "focusout",
  regexBirthdate,
  errorDataBirthdate,
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
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "2.8px solid green"
);
// Launch function for QUANTITY CONTEST on event "FOCUSIN"
eventInputs(
  inputQuantityContest,
  "focusin",
  1,
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "2.8px solid green"
);
// Launch function for QUANTITY CONTEST on event "FOCUSOUT"
eventInputs(
  inputQuantityContest,
  "focusout",
  1,
  2,
  regexQuantityContest,
  errorDataQuantityContest,
  "* Veuillez entrer un nombre entre 0 et 99",
  "0.8px solid #ccc"
);

//-----------------------------------
// INPUT LOCALISATION CONTEST CLICK
//-----------------------------------

eventInputLocalisation();

//--------------------------
// INPUT CONDITIONS CLICK
//--------------------------

eventInputConditions();
