// DOM Elements
const modalbg = document.querySelector(".bground"); // Const for the modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for <button> "Je m'inscris"
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const spanClose = document.querySelectorAll(".close"); // Const for <span> cross which close modal
const form = document.querySelector("form"); // Const for <form>
const modalBody = document.querySelector(".modal-body"); // Const for container parent of <form> & <div> "message thanks"
const errorData = document.querySelectorAll(".error-data"); // Const for the text-errors's containers on validation form
const textThanks = document.querySelector(".text-thanks"); // Const for container <div> with "message thanks" after a validation form succeed
const input = document.querySelectorAll("input"); // Const for all <input> elements

// Variables for each element contained in the Nodelist INPUT
const inputFirstName = input[0];
const inputLastName = input[1];
const inputEmail = input[2];
const inputBirthdate = input[3];
const inputQuantityContest = input[4];
const inputRadio = document.getElementsByName("location");

// Variables for each element contained in the Nodelist class "error-data"
const errorDataFirstName = errorData[0];
const errorDataLastName = errorData[1];
const errorDataEmail = errorData[2];
const errorDataBirthdate = errorData[3];
const errorDataQuantityContest = errorData[4];
const errorDataLocalisation = errorData[5];
const errorDataConditions = errorData[6];

// Variables for each message error

let textErrorNames =
  "* Entre 2 et 30 caractères, sans chiffre ni caractères spéciaux";
let textErrorEmail =
  "* Veuillez entrer une adresse mail valide (max 40 caractères)";
let textErrorBirthdate =
  "* Vous devez avoir au moins 12 ans au moment de l'inscription";
let textErrorQuantity = "* Veuillez entrer un nombre entre 0 et 99";
let textErrorLocalisation = "* Veuillez cocher une localisation";
let textErrorConditions = "* Veuillez accepter les conditions d'utilisation";

// Variables for style CSS

let fontColorError = "#ff0000";
let fontColorValid = "green";
let borderColorError = "2.8px solid #ff0000";
let borderColorValid = "2.8px solid green";
let borderColorInitial = "0.8px solid #ccc";

// Variables for innerHTML (icon & message thanks)
let iconValid = '<i class="fa fa-check"></i>';
let messageThanks =
  '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';
