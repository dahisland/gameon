// --------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------- DECLARATIONS VARIABLES ------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ------------------ This javascript contains all variables used in others javascripts files -------------------- //

// ------------------------------------------------- DOM ELEMENTS ------------------------------------------------ //

const modalbg = document.querySelector(".bground"); // Const for the modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for <button> "Je m'inscris"
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const formDataConditions = formData[6]; // Variable for element <div form-data> which contains checkboxes
const spanClose = document.querySelectorAll(".close"); // Const for <span> cross which close modal
const form = document.querySelector("form"); // Const for <form>
const modalBody = document.querySelector(".modal-body"); // Const for container parent of <form> & <div> "message thanks"
const errorData = document.querySelectorAll(".error-data"); // Const for the text-errors's containers on validation form
const textThanks = document.querySelector(".text-thanks"); // Const for container <div> with "message thanks" after a validation form succeed
const input = document.querySelectorAll("input"); // Const for all <input> elements
const topNav = document.getElementById("myTopnav"); // Const for element <header> containing nav
const navIcon = document.querySelector(".icon"); // Const for element <a> containing icon Hamburger for nav
// ---------------------------------------------------- INPUTS --------------------------------------------------- //
// -------------------------- Variables for each element contained in the Nodelist INPUT ------------------------- //

const inputFirstName = input[0];
const inputLastName = input[1];
const inputEmail = input[2];
const inputBirthdate = input[3];
const inputQuantityContest = input[4];
const inputRadio = document.getElementsByName("location");

// -------------------------------------------------- ERROR-DATA ------------------------------------------------- //
// ------------------- Variables for each element contained in the Nodelist class "error-data" ------------------- //

const errorDataFirstName = errorData[0];
const errorDataLastName = errorData[1];
const errorDataEmail = errorData[2];
const errorDataBirthdate = errorData[3];
const errorDataQuantityContest = errorData[4];
const errorDataLocalisation = errorData[5];
const errorDataConditions = errorData[6];

// ---------------------------------------------------- TOPNAV --------------------------------------------------- //
// ------------------------- Variables for each element <span> contained in the <topnav> ------------------------- //

const spanDetails = document.querySelector("#navbar-details");
const spanPropos = document.querySelector("#navbar-propos");
const spanContact = document.querySelector("#navbar-contact");
const spanEvents = document.querySelector("#navbar-events");

// ----------------------------------------------- MESSAGES ERRORS ----------------------------------------------- //
// ----------------------- Variables for each message error displayed on <div error-data> ------------------------ //

let textErrorNames =
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux";
let textErrorEmail =
  "* Veuillez entrer une adresse mail valide (max 40 caractères)";
let textErrorBirthdate =
  "* Vous devez avoir au moins 12 ans au moment de l'inscription";
let textErrorQuantity = "* Veuillez entrer un nombre entre 0 et 99";
let textErrorLocalisation = "* Veuillez cocher une localisation";
let textErrorConditions = "* Veuillez accepter les conditions d'utilisation";

// -------------------------------------------------- STYLE CSS -------------------------------------------------- //
// --------------------------- Variables for style CSS displayed in <div error-data> ----------------------------- //

let fontColorError = "#ff0000";
let fontColorValid = "green";
let borderColorError = "2.8px solid #ff0000";
let borderColorValid = "2.8px solid green";
let borderColorInitial = "0.8px solid #ccc";
let iconValid = '<i class="fa fa-check"></i>';

// ------------------------------------------------- INNER HTML -------------------------------------------------- //
// ------------------- Variables for innerHTML displayed for the Thanks message after submit --------------------- //

let messageThanks =
  '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';

// -------------------------------------------------- DATE NOW --------------------------------------------------- //
// -------------------------- Variables to collect current date (day, month and year) ---------------------------- //

let today = new Date();
let dayToday = today.getDate();
let monthToday = today.getMonth();
let yearToday = today.getFullYear();

// ---------------------------------------------------- REGEX ---------------------------------------------------- //
// -------------------------------- Regex for inputs [type=text/email/date/number] ------------------------------- //

const regexNames =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,/.\s-]{2,50}$/g;
const regexEmail =
  /^([\w/./_/!/#/$/%/&/£/'/*/+/=/?/^/`/{/|/}/~/"/(/)/,/:/;/</>/@-]{1,}[\@][a-zA-Z]{1,}[\.][a-zA-Z]{2,})$/;
const regexBirthdate =
  /^(19[0-9][0-9]|20[0-1][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexQuantityContest = /^([0-9]|[0-9][0-9])$/;

export {
  modalbg,
  modalBtn,
  formData,
  formDataConditions,
  spanClose,
  form,
  modalBody,
  errorData,
  textThanks,
  input,
  inputFirstName,
  inputLastName,
  inputEmail,
  inputBirthdate,
  inputQuantityContest,
  inputRadio,
  errorDataFirstName,
  errorDataLastName,
  errorDataEmail,
  errorDataBirthdate,
  errorDataQuantityContest,
  errorDataLocalisation,
  errorDataConditions,
  spanDetails,
  spanPropos,
  spanContact,
  spanEvents,
  textErrorNames,
  textErrorEmail,
  textErrorBirthdate,
  textErrorQuantity,
  textErrorLocalisation,
  textErrorConditions,
  fontColorValid,
  fontColorError,
  borderColorError,
  borderColorValid,
  borderColorInitial,
  iconValid,
  messageThanks,
  today,
  dayToday,
  monthToday,
  yearToday,
  regexNames,
  regexEmail,
  regexBirthdate,
  regexQuantityContest,
  navIcon,
  topNav,
};
