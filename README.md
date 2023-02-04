[![forthebadge](./readme-assets/html5-badge.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

<br/>

<div id="header" align="left">
  <img src="./img/Logo.png" width="200"/>
</div>

# Project GameOn

GameOn is an small entreprise specialized in conferences and organization of game competitions.

From the models and layout files provided, this project aims to correct in javascript the "issues" encountered on the modal of the form.
Corrections to the HTML/CSS layout have also been made in order to provide a rendering project that complies with the conditions listed.

# Basic instructions :

1. Fork this repository ;
2. It is advised to use VisualStudio Code and you can use Docker, but it is not required ;
3. There is no dependencies ;
4. You must only use custom CSS and pure JavaScript, no jQuery, Bootstrap or other library ;

# Issues

## Manual tests

1. Visualize and test the user interface in the latest versions of Chrome and Firefox, as well as mobile and desktop versions. Fix existing display errors.

2. Test all functionality of buttons and form inputs (test correct and incorrect values)

## Add confirmation when send successful

1. After successful submission, include a successful submission confirmation message for the user (ex. "Thank you! Your reservation has been received.")

## Add validation or error messages

1. Specific error messages should appear under the entry that is not correct. Error messages should appear below the associated input field.

Examples :

    - "Please enter 2 or more characters for the name field."
    - "You must choose an option."
    - "You must accept the terms and conditions."
    - "You must complete your date of birth."

## Implement form inputs

1. Link labels to entries in HTML using "for" and "id" attributes in existing code. Correct the HTML code when necessary.

2. Use pure JavaScript (no jQuery) to complete the form :

   -The form must be valid when the user clicks on "Submit" :
   The data must be entered correctly :

   - (1) The Firstname field has a minimum of 2 characters / is not empty.
   - (2) The Lastname field has a minimum of 2 characters / is not empty.
   - (3) Email addres must be valid.
   - (4) For the number of competitions, a numerical value is entered.
   - (5) A radio button is selected.
   - (6) Terms and conditions box is checked, other box is optional / can be left unchecked.
   - Keep form data (don't clear form) when it doesn't pass validation.

## Close modale

1. Add functionality to button (x)
